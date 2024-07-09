import React from 'react'
import logo from '../TO_logo_Update.png'

export default function About(props) {
  return (
    <div className='container my-3' style={{color: props.mode==='light' ?'black':'white'}} >

      <table>
        <tr>
          <td align='center'><u><h1>TextOpe</h1></u></td>
          <td rowSpan={2}>
              <div>
                <img src={logo} alt='logo'/>
              </div>
          </td>
        </tr>
        
        <tr>
          <td>
          <p>This Web site created using create-react-app. TextOpe is a word counter and a character counting utility to manipulate your text in the way you want. <br></br>
            You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to Lowercase and lowercase to uppercase.
          </p>
          </td>
        </tr>
      </table>

      <p>This Web site created using create-react-app. TextOpe is a word counter and 
        a character counting utility to manipulate your text in the way you want. You can remove extra spaces,
        copy the manipulated text as well as convert your text from Uppercase to Lowercase and lowercase to uppercase.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestiae harum voluptatibus quis, blanditiis ut, natus quod dolore beatae, culpa odio laudantium recusandae. Animi, ad. Numquam voluptates exercitationem id maxime.
        Officiis eos animi beatae explicabo? Molestiae earum provident dolores alias assumenda modi vitae nobis, mollitia veniam dolorum perspiciatis officia autem, laborum veritatis nulla a maxime excepturi inventore ducimus! Quasi, facere?
        Animi ipsum in iste provident, possimus doloribus ipsa accusamus minus omnis, deleniti molestias cumque cupiditate deserunt ratione itaque libero alias hic! Sint velit perferendis animi ipsam distinctio magni maxime eaque.
        Doloremque nisi vel laboriosam aut aspernatur maiores nostrum optio, dolore obcaecati fugit esse pariatur harum, molestias ipsum fuga tempora perspiciatis. Officiis porro impedit itaque ut doloribus sunt ipsam laboriosam quaerat!
        Quos nam explicabo, quisquam distinctio, officiis alias ex sit ducimus asperiores voluptatibus corrupti earum laborum eveniet. Aspernatur cumque, nisi non ad corporis quod aliquam dignissimos esse aliquid aut? Illo, inventore!
      </p>
        
    </div>
  )
}
