/**
 * @function format time
 * @param val, format
 * @return {string}
 * @example
 *      <template>
 *          <div>
 *             <span>{{item.time | formatTime('yyyy/MM/dd hh:mm:ss')}}</span>
 *          </div>
 *       </template>
 *       import {formatTime} from '../../library/timeFormat'
 *       export default {
 *          filters: {formatTime}
 *       }
 */
function formatDate(val, format) {
  const REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
  if (val) {
    /**
     * @instructions 如果不是时间戳格式，且含有字符 '-' 则将 '-' 替换成 '/' && 删除小数点及后面的数字
     * @reason 将 '-' 替换成 '/' && 删除小数点及后面的数字 的原因是safari浏览器仅支持 '/' 隔开的时间格式
     */
    if (val.toString().indexOf("-") > 0) {
      val = val
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "")
        .replace(/(-)/g, "/"); // 将 '-' 替换成 '/'
      val = val.slice(0, val.indexOf(".")); // 删除小数点及后面的数字
    }
    let date = new Date(val);
    date.setHours(date.getHours() + 8);
    const [whole, yy, MM, dd, hh, mm, ss] = date.toISOString().match(REGEX);
    if (format) {
      return format
        .replace("yyyy", yy)
        .replace("yy", yy.slice(2))
        .replace("MM", MM)
        .replace("dd", dd)
        .replace("hh", hh)
        .replace("mm", mm)
        .replace("ss", ss);
    } else {
      return [yy, MM, dd].join("-") + " " + [hh, mm].join(":");
    }
  } else {
    return "--";
  }
}

/**
 * 验证身份证号
 * @param {number} personnumber
 */
function checkIDCard(personnumber) {
  if (!personnumber) {
    return false;
  }
  personnumber = personnumber.toUpperCase();
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(personnumber)) {
    return false;
  }
  var len, re;
  len = personnumber.length;
  //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
  var arrCh = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
  if (len == 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
    var arrSplit = personnumber.match(re);
    //检查生日日期是否正确
    var dtmBirth = new Date("19" + arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
    var bGoodDay;
    bGoodDay =
      dtmBirth.getFullYear() == Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
      dtmBirth.getDate() == Number(arrSplit[4]);
    if (!bGoodDay) {
      return false;
    } else {
      //将15位身份证转成18位
      var nTemp = 0,
        i;
      personnumber =
        personnumber.substr(0, 6) + "19" + personnumber.substr(6, personnumber.length - 6);
      for (i = 0; i < 17; i++) {
        nTemp += personnumber.substr(i, 1) * arrInt[i];
      }
      personnumber += arrCh[nTemp % 11];
      return true;
    }
  }
  if (len == 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
    var arrSplit = personnumber.match(re);

    //检查生日日期是否正确
    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
    var bGoodDay;
    bGoodDay =
      dtmBirth.getFullYear() == Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 == Number(arrSplit[3]) &&
      dtmBirth.getDate() == Number(arrSplit[4]);
    if (!bGoodDay) {
      return false;
    } else {
      var valnum;
      var nTemp = 0,
        i;
      for (i = 0; i < 17; i++) {
        nTemp += personnumber.substr(i, 1) * arrInt[i];
      }
      valnum = arrCh[nTemp % 11];
      if (valnum != personnumber.substr(17, 1)) {
        return false;
      }
      return true;
    }
  }
  return false;
}

/**
 * 验证手机号
 * @param {string} phone
 */
function checkPhone(phone) {
  if (!/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  }
  return true;
}

/**
 *
 * 根据身份证号计算性别年龄
 * @param id
 */
function getGenderAndAgeByIDNumber(id) {
  let birthdayValue = "";
  if (15 === id.length) {
    //15位身份证号码
    birthdayValue = id.charAt(6) + id.charAt(7);
    if (parseInt(birthdayValue) < 10) {
      birthdayValue = "20" + birthdayValue;
    } else {
      birthdayValue = "19" + birthdayValue;
    }
    //性别判断,给radio男女赋值,出生日期赋值
    birthdayValue =
      birthdayValue + "-" + id.charAt(8) + id.charAt(9) + "-" + id.charAt(10) + id.charAt(11);
    if (parseInt(id.charAt(14) / 2) * 2 != id.charAt(14)) {
      return {
        birthday: birthdayValue,
        gender: "男"
      };
    } else {
      return {
        birthday: birthdayValue,
        gender: "女"
      };
    }
  }

  if (18 == id.length) {
    //18位身份证号码
    //性别判断,给radio男女赋值,出生日期赋值
    birthdayValue =
      id.charAt(6) +
      id.charAt(7) +
      id.charAt(8) +
      id.charAt(9) +
      "-" +
      id.charAt(10) +
      id.charAt(11) +
      "-" +
      id.charAt(12) +
      id.charAt(13);
    if (parseInt(id.charAt(16) / 2) * 2 != id.charAt(16)) {
      return {
        birthday: birthdayValue,
        gender: "男"
      };
    } else {
      return {
        birthday: birthdayValue,
        gender: "女"
      };
    }
  }
}

/**
 * 验证表单项
 * @param {Object} rules
 * @param {Object} formData
 */
function verificationForm(rules = {}, formData = {}) {
  let flagPass = true;
  if (Object.prototype.toString.call(formData) === "[object Object]") {
    return new Promise((resolve, reject) => {
      for (let key in formData) {
        const item = formData[key];
        if (rules[key]) {
          for (let i = 0; i < rules[key].length; i++) {
            let rule = rules[key][i];
            //console.log(rule, item);
            if (rule.required) {
              if (item === "" || item === "undefind" || item === null) {
                flagPass = false;
                reject(rule);
                break;
              }
            } else if (typeof rule.min === "number" && typeof rule.max === "number") {
              if (item.length < rule.min || item.length > rule.max) {
                flagPass = false;
                reject(rule);
                break;
              }
            }
          }
        }
      }
      if (flagPass) {
        resolve();
      }
    });
  } else if (Object.prototype.toString.call(formData) === "[object Array]") {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < formData.length; i++) {
        let obj = formData[i];
        for (let key in obj) {
          const item = obj[key];
          if (rules[key]) {
            for (let a = 0; a < rules[key].length; a++) {
              let rule = rules[key][a];
              if (rule.required) {
                if (item === "" || item === "undefind" || item === null) {
                  flagPass = false;
                  rule.index = i;
                  reject(rule);
                  break;
                }
              } else if (typeof rule.min === "number" && typeof rule.max === "number") {
                if (item.length < rule.min || item.length > rule.max) {
                  flagPass = false;
                  rule.index = i;
                  reject(rule);
                  break;
                }
              }
            }
          }
        }
      }

      if (flagPass) {
        resolve();
      }
    });
  }
}

function getQueryVariable(variable) {
  let query = window.location.hash.split("?")[1];
  if (!query) return;
  let vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.log(pair);
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

/**
 * 获取设备像素比
 * name {string} 图片名
 * suffix {string} 文件类型后缀
 * return {string}
 */
const DEVICE_PIXEL_RATIO = window.devicePixelRatio;
function getPixelRatioImage(name, suffix = ".png") {
  name = name.replace(/\.png/, "");
  console.log(name);
  if (DEVICE_PIXEL_RATIO < 2) {
    return `${name}${suffix}`;
  }
  return `${name}@${Math.floor(DEVICE_PIXEL_RATIO)}x${suffix}`;
}

module.exports = {
  formatDate,
  checkIDCard,
  getGenderAndAgeByIDNumber,
  verificationForm,
  checkPhone,
  getQueryVariable,
  getPixelRatioImage
};
