import { MobileElement } from "./styles";
import Rnative from "../../../../assets/svg/react-native.svg"
import firebase from "../../../../assets/svg/firebase.svg"
export function Mobile() {
  return (
    <MobileElement>
      <h4>Desenvolvimento Mobile</h4>

      <div className="content">
        <div className="ReactNative">
          <img src={Rnative} alt="ReactNative" />
          <h5>React Native</h5>
          <p>
            O React Native permite que você crie aplicativos 
            verdadeiramente nativos e não comprometa as experiências 
            de seus usuários.
          </p>
        </div>

        <div className="Firebase">
          <img src={firebase} alt="Firebase" style={{width: '4rem'}} />
          <h5>Firebase</h5>
          <p>
            O Firebase da Google é uma plataforma digital utilizada 
            para facilitar o desenvolvimento de aplicativos web ou móveis,
            oferecendo serviços como autenticação, Chats e Analytics.
          </p>
        </div>
      </div>
    </MobileElement>
  )
}