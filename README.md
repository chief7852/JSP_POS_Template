# JSP_POS_Template




## ๐กDescription๐ก
 ๐จ๏ธPOS ์ ๊ธฐ๋ณธ์ด ๋  ํํ๋ฆฟ์ ์ฐพ์์ ์์ด ์ฌ๋ฌ๊ฐ์ง ๊ณคํน์ ๊ฒช๋ค 8๊ฐ์๊ฐ ๋ฐฐ์ด ๋จธ๋ฆฌ๋ฅผ ์ฅ์ด์จ๋ด๋ฉฐ 
 ๋ง๋ค์๋ pos๋ถ๋ถ์ templateํ ์์ผ ํ์ํ ์ฌ๋๋ค์๊ฒ ๋์์ด ๋๊ธฐ์ํด ๊ฐ๋ฅํ ๊ตฌํํด๋ณด์๋ค.
 
 <br>
 
 ## ๐ ๏ธEnvironment๐ ๏ธ
 - IDE : <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat-square&logo=EclipseIDE&logoColor=white"/></a>
 - OS  : 
 <img src="https://img.shields.io/badge/Window-3766AB?style=flat-square&logo=Windows&logoColor=white"/></a>
 - Stack:
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/></a>

 <br>
 
 ## โ ๏ธPrerequisiteโ ๏ธ
 - ajax์ ํํ๋ฅผ ๋จ๊ฒจ๋ ์ํ ๊ธฐ์กด Spring 3.x๋ฒ์  ์ผ๋ก ๊ตฌํ ํ์๋ ์ฝ๋์์
   ๊ฐ์ ธ์์ผ๋ฏ๋ก ์์ ์ ๊ฐ๋ฐํ๊ฒฝ์ ๋ฐ๋ผ ์ ๋นํ ๋ฐ๊ฟ์ ์ฌ์ฉํ๋ฉด๋ ๋ฏํ๋ค.
   
 <br>
 
 ## ๐Usage๐
 - jsQR.js  : https://github.com/cozmo/jsQR ์ด ์ฌ์ดํธ์์ ๊ฐ์ ธ์จ qrReader
 - scanner-js : QR์ฝ๋ ๊ฒฐ์  ๋ก์ง์ด ๋์ด์์ด ํํ์๋ฐ๋ผ ์์ ํ๋ฉฐ ๊ณ์ฐ๋ฐฉ๋ฒ์ ๋ฐ๊พธ๋ฉด๋ ๋ฏํ๋ค
 - priceFormmating.js : ์ซ์์ 3๋ฒ์งธ ์๋ฆฌ๋ง๋ค ์ฝค๋ง(,)๋ฅผ ์ฐ์ด์ฃผ๊ฑฐ๋ ์ ๊ฑฐํ๋ ์์์ ํตํด ๊ธ์ก์ UI/UX๋ฅผ ์์น ์์ผ์ค ์์์
- ์ฌ์ฉ๋ฒ  : 
<table>
  <tr>
      <th>ํจ์๋ช</th>
      <th> ์ค๋ช</th>
  </tr>
  <tr>
    <td>
    putCommaProcess('val')
    </td>
    <td>
    input ํ๊ทธ์ value๋ฅผ ๊ฐ์ ธ์์ ํฌ๋งทํํด์ฃผ๊ณ  ๊ทธ๋๋ก ๊ทธ input ํ๊ทธ์ ๋ฃ์ด์ฃผ๋ ์์
    </td>
    </tr>
    <tr>
        <td>
    deleteComma('val')
    </td>
    <td>
    string์ผ๋ก returnํ  ๊ฒ์ด๊ธฐ ๋๋ฌธ์ return ๋ฐ์์ parseoInt๋ฅผ ํด์ค์ผํ๋ค.
    </td>
    </tr>
    <tr>
        <td>
    putComma('val')
    </td>
    <td>
    ์ฝค๋ง๊ฐ ์๋ ๊ธ์ก์์ ์ฝค๋ง๋ฅผ ๋ถ์ฌ์ฃผ๋ ์์์ ํ๋ค.<br>
    string์ผ๋ก returnํ  ๊ฒ์ด๊ธฐ ๋๋ฌธ์ return ๋ฐ์์ parseoInt๋ฅผ ํด์ค์ผํ๋ค.
    </td>
  </tr>
      <tr>
        <td>
    isEmpty(value))
    </td>
    <td>
    ๋น์ด์๋ ์๋๋๋ง ํ๋จํด์ฃผ๋ ๊ฒ.
    </td>
  </tr>
</table>
<br>

## IMGS

- **baseimg**
![pos-issac](https://user-images.githubusercontent.com/74906815/124236563-867b6600-db51-11eb-8b4b-17322a3087a2.JPG)
<br>

- **saveimg**
![save-issac](https://user-images.githubusercontent.com/74906815/124238184-3b625280-db53-11eb-940c-8d324eba0446.JPG)

<br>

- **qrRead**
![qrcoderead-issac](https://user-images.githubusercontent.com/74906815/124238273-5634c700-db53-11eb-8558-56e8aa9ba1ad.JPG)

<br>

- **cartImg**
![cart-issac](https://user-images.githubusercontent.com/74906815/124238335-6c428780-db53-11eb-9568-5db783ecd2c6.JPG)

