# JSP_POS_Template




## 💡Description💡
 🖨️POS 의 기본이 될 템플릿을 찾을수 없어 여러가지 곤혹을 겪다 8개월간 배운 머리를 쥐어쨔내며 
 만들었던 pos부분을 template화 시켜 필요한 사람들에게 도움이 되기위해 가능한 구현해보았다.
 
 <br>
 
 ## 🛠️Environment🛠️
 - IDE : <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=flat-square&logo=EclipseIDE&logoColor=white"/></a>
 - OS  : 
 <img src="https://img.shields.io/badge/Window-3766AB?style=flat-square&logo=Windows&logoColor=white"/></a>
 - Stack:
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/></a>

 <br>
 
 ## ⚠️Prerequisite⚠️
 - ajax의 형태를 남겨둔 상태 기존 Spring 3.x버전 으로 구현 하였던 코드에서
   가져왔으므로 자신의 개발환경에 따라 적당히 바꿔서 사용하면될듯하다.
   
 <br>
 
 ## 📖Usage📖
 - jsQR.js  : https://github.com/cozmo/jsQR 이 사이트에서 가져온 qrReader
 - scanner-js : QR코드 결제 로직이 되어있어 형태에따라 수정하며 계산방법을 바꾸면될듯하다
 - priceFormmating.js : 숫자의 3번째 자리마다 콤마(,)를 찍어주거나 제거하는 작업을 통해 금액의 UI/UX를 상승 시켜줄 수있음
- 사용법  : 
<table>
  <tr>
      <th>함수명</th>
      <th> 설명</th>
  </tr>
  <tr>
    <td>
    putCommaProcess('val')
    </td>
    <td>
    input 태그의 value를 가져와서 포맷팅해주고 그대로 그 input 태그에 넣어주는 작업
    </td>
    </tr>
    <tr>
        <td>
    deleteComma('val')
    </td>
    <td>
    string으로 return할 것이기 때문에 return 받아서 parseoInt를 해줘야한다.
    </td>
    </tr>
    <tr>
        <td>
    putComma('val')
    </td>
    <td>
    콤마가 없는 금액에서 콤마를 붙여주는 작업을 한다.<br>
    string으로 return할 것이기 때문에 return 받아서 parseoInt를 해줘야한다.
    </td>
  </tr>
      <tr>
        <td>
    isEmpty(value))
    </td>
    <td>
    비어잇냐 아니냐만 판단해주는 것.
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

