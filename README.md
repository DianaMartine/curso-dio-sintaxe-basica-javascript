# Curso de sintaxe básica em JavaScript

📋Plano de aulas</h1></header>
<div class="page-body">
<ul id="e5ee4531-773d-48bc-bfb6-7f8f22c51a06" class="block-color-red_background toggle">
   <li>
      <details open="">
         <summary><mark class="highlight-red_background">Aula 1 - O que danado é JavaScript? </mark> <code>script.js</code> ✅</summary>
         <div id="fb329cde-13ea-4a2d-a128-54542fecf933" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="8dba805d-0a47-43e6-9074-0fec26d69717">
                     <td class="cell-title"><a href="https://www.notion.so/Como-surgiu-8dba805d0a4743e690740fec26d69717">Como surgiu?</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-pink">History</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Glossary/JavaScript">glossário</a></td>
                  </tr>
                  <tr id="cb3403fd-b717-4120-b1d1-21b7e848132a">
                     <td class="cell-title"><a href="https://www.notion.so/Pra-qu-serve-cb3403fdb7174120b1d121b7e848132a">Pra quê serve?</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-pink">History</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript">o que é o javascript</a></td>
                  </tr>
                  <tr id="09713919-8a15-4f55-949c-871fcb693b65">
                     <td class="cell-title"><a href="https://www.notion.so/Onde-usar-097139198a154f55949c871fcb693b65">Onde usar?</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-pink">History</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript">o que é o javascript</a></td>
                  </tr>
                  <tr id="f0d09714-e25f-4a9b-acab-54293db9abe9">
                     <td class="cell-title"><a href="https://www.notion.so/Preparando-o-ambiente-f0d09714e25f4a9bacab54293db9abe9">Preparando o ambiente</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-gray">Config</span><span class="selected-value select-value-color-orange">Dev</span></td>
                     <td class="cell-~GqB"><a href="https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript/blob/main/Aula">pdf de instalação e configuração de ambiente</a></td>
                  </tr>
                  <tr id="73ae1ff9-9060-4708-8bc2-db140c0c8071">
                     <td class="cell-title"><a href="https://www.notion.so/Desenvolvendo-o-primeiro-c-digo-73ae1ff9906047088bc2db140c0c8071">Desenvolvendo o primeiro código</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span></td>
                     <td class="cell-~GqB"><a href="https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript">primeiro script</a></td>
                  </tr>
                  <tr id="5369d79f-03ab-4b1f-98fa-f843e9b2c11e">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-5369d79f03ab4b1f98faf843e9b2c11e">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB"><a href="https://docs.google.com/presentation/d/1J8ALUVYqdvtAolFvi3mZ45XDBJBkuC6a/edit?usp=sharing&amp;ouid=111286512786680935735&amp;rtpof=true&amp;sd=true">slide de apresentação</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="1e38808c-56e3-497e-a93a-3e5ace55d17f" class=""></p>
         <p id="fa7ac8ea-508e-4792-8ec3-2a021bea4c7e" class="">Andamento da aula</p>
         <ul id="72ab6615-eb1c-4aba-9896-ac79ead71ce5" class="toggle">
            <li>
               <details open="">
                  <summary>📔História</summary>
                  <ul id="eb3a601b-d9d0-4436-9a5c-82629dc768b6" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Como surgiu?</span>
                     </li>
                  </ul>
                  <ul id="dbd538a8-c553-496f-85ef-043c62b0fb77" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Pra quê serve?</span>
                     </li>
                  </ul>
                  <ul id="1ae95505-6dc1-4ae0-a06a-9a6478351649" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Onde usar?</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <ul id="6fc9ccf0-43d9-46c6-a29e-d52a5ae15fe5" class="toggle">
            <li>
               <details open="">
                  <summary>🖥️Configurando e desenvolvendo</summary>
                  <ul id="b4652735-c75c-4c0d-9613-6f3e066aafdf" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Instalando o VSCode</span>
                     </li>
                  </ul>
                  <ul id="fc95b0ea-e84a-40cb-af95-f7d0d5a8df61" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Instalando a extensão Live Server</span>
                     </li>
                  </ul>
                  <ul id="0ffd0301-446a-4828-8753-725eb6d5010e" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Desenvolvendo o primero código</span>
                     </li>
                  </ul>
                  <ul id="8a84a54d-4d1c-40d7-b745-766fccbd4ae0" class="toggle">
                     <li>
                        <details open="">
                           <summary>✅Boas Práticas</summary>
                           <ul id="f1b1df6d-7632-458b-870f-c1ceef39004d" class="to-do-list">
                              <li>
                                 <div class="checkbox checkbox-off"></div>
                                 <span class="to-do-children-unchecked">Externar o arquivo JS</span>
                              </li>
                           </ul>
                           <ul id="7da2f88e-61a1-483c-a6c5-fb2abe61817a" class="to-do-list">
                              <li>
                                 <div class="checkbox checkbox-off"></div>
                                 <span class="to-do-children-unchecked">Importar ao final do HTML</span>
                              </li>
                           </ul>
                        </details>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="c1f746b5-fce0-494c-9640-38669f6d1dff" class=""></p>
      </details>
   </li>
</ul>
<ul id="abc37d98-b270-4dc7-82c4-644da2d24285" class="block-color-pink_background toggle">
   <li>
      <details open="">
         <summary>Aula 2 - Entendendo variáveis e seus valores <code>var, let &amp; const</code> ✅</summary>
         <div id="47a6aaab-23e1-4be4-a468-3c9705d7ee11" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="83d02bad-0aa3-4b88-831e-a2cfdc9fc9bf">
                     <td class="cell-title"><a href="https://www.notion.so/Como-funciona-a-tipagem-em-JS-83d02bad0aa34b88831ea2cfdc9fc9bf">Como funciona a tipagem em JS</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://danvitoriano.medium.com/tipagem-dinâmica-no-javascript-e3551a445b38">tipagem dinâmica</a></td>
                  </tr>
                  <tr id="a96ee3bf-3eb1-4be3-9ece-e40e0f0b0822">
                     <td class="cell-title"><a href="https://www.notion.so/Declara-o-de-vari-veis-a96ee3bf3eb14be39ecee40e0f0b0822">Declaração de variáveis</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types">variáveis</a></td>
                  </tr>
                  <tr id="2d258029-26ea-4034-b419-a394fac8809d">
                     <td class="cell-title"><a href="https://www.notion.so/Diferen-as-entre-atribui-o-compara-o-e-compara-o-id-ntica-2d25802926ea4034b419a394fac8809d">Diferenças entre atribuição, comparação e comparação idêntica</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao">atribuição. comparação e comparação identica</a></td>
                  </tr>
                  <tr id="b0b13633-f384-4c12-bc5e-b2d3a68a6a5c">
                     <td class="cell-title"><a href="https://www.notion.so/Operadores-aritm-ticos-e-l-gicos-b0b13633f3844c12bc5eb2d3a68a6a5c">Operadores aritméticos e lógicos</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao">operadores</a></td>
                  </tr>
                  <tr id="7c106e8f-f189-4402-b50d-ca31ca2872f2">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-7c106e8ff1894402b50dca31ca2872f2">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB"><a href="https://docs.google.com/presentation/d/12WrtfPD1kelr76mXkbkVgIg6-PNAwJrC/edit?usp=sharing&amp;ouid=111286512786680935735&amp;rtpof=true&amp;sd=true">slide de apresentação</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="77f15c87-5f09-4823-b99c-fb64c150f36a" class=""></p>
         <p id="b02d6c31-e1ea-4585-b831-63ba714f6d66" class="">Andamento da aula</p>
         <ul id="e035e43a-9a3c-4048-ba96-9ee0b869a8d0" class="toggle">
            <li>
               <details open="">
                  <summary>📦Variáveis</summary>
                  <ul id="5c79c5ae-2900-442b-a822-59393abccfdd" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Como funciona a tipagem em JS?</span>
                     </li>
                  </ul>
                  <ul id="f0f606b1-2a33-4e01-9a82-7345376bbcfa" class="toggle">
                     <li>
                        <details open="">
                           <summary>Declaração de variáveis</summary>
                           <ul id="ce9c56d7-92a3-4513-a00b-c0e05043253f" class="to-do-list">
                              <li>
                                 <div class="checkbox checkbox-off"></div>
                                 <span class="to-do-children-unchecked">Tipos primitivos</span>
                              </li>
                           </ul>
                           <ul id="88e67612-4c28-47ed-868f-a3912bdcc38e" class="to-do-list">
                              <li>
                                 <div class="checkbox checkbox-off"></div>
                                 <span class="to-do-children-unchecked">Tipos de variáveis</span>
                              </li>
                           </ul>
                           <ul id="b414b4dd-f9a3-4a08-9f42-5fdc415ddc08" class="to-do-list">
                              <li>
                                 <div class="checkbox checkbox-off"></div>
                                 <span class="to-do-children-unchecked">Escopo - <a href="https://imasters.com.br/desenvolvimento/escopos-em-javascript">https://imasters.com.br/desenvolvimento/escopos-em-javascript</a></span>
                              </li>
                           </ul>
                        </details>
                     </li>
                  </ul>
                  <ul id="afc63a93-3626-4d07-af35-4500a3be5af2" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Diferenças entre atribuição, comparação e comparação idêntica</span>
                     </li>
                  </ul>
                  <ul id="d10d3754-3d72-4f20-b3cc-b760d7dd17e0" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Operadores aritméticos e lógicos</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <ul id="95852927-3bcb-491f-bffa-4bfec35d1c3a" class="toggle">
            <li>
               <details open="">
                  <summary>✅Boas Práticas</summary>
                  <ul id="b490d722-fb6e-4b43-897a-4326dc20b792" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Regras de declaração de variáveis - camelCase - <a href="https://www.w3schools.com/js/js_conventions.asp">https://www.w3schools.com/js/js_conventions.asp</a></span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="da1c8575-6f3f-46e4-93f3-4c620772f5c0" class=""></p>
      </details>
   </li>
</ul>
<ul id="0b4ef778-2b7b-451a-9fc4-397be2969516" class="block-color-purple_background toggle">
   <li>
      <details open="">
         <summary>Aula 3 - Vetores e objetos <code>[array] {object}</code> ✅</summary>
         <div id="be310244-f2ac-4ac1-b196-f5790bfa902c" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="b6b8c6d3-4e28-455c-9290-7b88120c49e9">
                     <td class="cell-title"><a href="https://www.notion.so/Vetores-b6b8c6d34e28455c92907b88120c49e9">Vetores</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array">Arrays</a></td>
                  </tr>
                  <tr id="53bdd603-0da9-4cfd-8ce7-d4d0e1e43688">
                     <td class="cell-title"><a href="https://www.notion.so/Objetos-53bdd6030da94cfd8ce7d4d0e1e43688">Objetos</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects">Objetos</a></td>
                  </tr>
                  <tr id="0b121c88-8f04-472c-9dc8-4a3aa7968402">
                     <td class="cell-title"><a href="https://www.notion.so/Desestrutura-o-0b121c888f04472c9dc84a3aa7968402">Desestruturação</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt">Desestruturação</a></td>
                  </tr>
                  <tr id="b11ca7db-98ae-4ae8-b261-15bf5b99bc14">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-b11ca7db98ae4ae8b26115bf5b99bc14">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB">slide de apresentação</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="189fe4a2-c90e-434a-9ebe-a7198a000571" class=""></p>
         <p id="6e38a785-37fb-4bf9-8ccd-077b6bb4833c" class="">Andamento da aula</p>
         <ul id="af6e6c4a-f29b-4f8c-b2af-cb01141795a6" class="toggle">
            <li>
               <details open="">
                  <summary>Vetores</summary>
                  <ul id="08cf8e0d-6199-4aff-8aba-60dd4abda047" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">O que são vetores ou arrays?</span>
                     </li>
                  </ul>
                  <ul id="42c2065a-9871-4d94-96e4-e45044fec3b5" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Manipulando arrays</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <ul id="df93b2c5-2240-4f75-a2bd-b35a8a75ced0" class="toggle">
            <li>
               <details open="">
                  <summary>Objetos</summary>
                  <ul id="2bcce8aa-da5f-4e4f-a354-30e2d4a9ab7e" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">O que são objetos?</span>
                     </li>
                  </ul>
                  <ul id="75685d2c-a37c-4ebe-8393-c4ade02a526f" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Desestruturando Objetos</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="0e4f3bf8-5d95-413b-a686-4bb225fc0d10" class=""></p>
      </details>
   </li>
</ul>
<ul id="2764337c-ea13-4137-85fb-4ab7fe61a408" class="block-color-blue_background toggle">
   <li>
      <details open="">
         <summary>Aula 4 - Estruturas condicionais <code>if &amp;&amp; else...</code> ✅</summary>
         <div id="349ec3b5-9dea-4ad5-8aaf-51c1efb7bf0a" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="65e350c9-e686-4b04-801d-0c473ea8b81d">
                     <td class="cell-title"><a href="https://www.notion.so/Estruturas-condicionais-65e350c9e6864b04801d0c473ea8b81d">Estruturas condicionais</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals">estruturas condicionais</a></td>
                  </tr>
                  <tr id="86bcd2bc-91b4-42bd-bf62-edee63fabc4e">
                     <td class="cell-title"><a href="https://www.notion.so/Estruturas-de-repeti-o-86bcd2bc91b442bdbf62edee63fabc4e">Estruturas de repetição</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration">laços de repetição</a></td>
                  </tr>
                  <tr id="1e7e4823-d358-4972-9e21-1faab070dda2">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-1e7e4823d35849729e211faab070dda2">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB"><a href="https://docs.google.com/presentation/d/1FErcd99zHq345ZtSE1yetOsKEhBKyQhD/edit?usp=sharing&amp;ouid=111286512786680935735&amp;rtpof=true&amp;sd=true">slide de apresentação</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="1e5804a7-e747-41cc-9a3d-64d163481812" class=""></p>
         <p id="ec350239-6edd-4236-b1ab-51cebad3e2bb" class="">Andamento da aula</p>
         <ul id="6594c12b-a5a2-43c5-91fb-a36b3a7675c6" class="toggle">
            <li>
               <details open="">
                  <summary>Estruturas condicionais</summary>
                  <ul id="c3d40fc1-9d00-4f58-9d40-0968d7b4697c" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Decisão</span>
                     </li>
                  </ul>
                  <ul id="876102aa-ea6e-4b2f-bd77-bebbc215ba17" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Repetição</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="e624e0d7-3a05-41ea-be8e-8498d0a6ca01" class=""></p>
      </details>
   </li>
</ul>
<ul id="723e994f-ee93-4883-9f96-5d07c50af399" class="block-color-teal_background toggle">
   <li>
      <details open="">
         <summary>Aula 5 – Funções e suas particularidades <code>function(){}</code> ✅</summary>
         <div id="1dafdcfb-c193-4990-96e1-e84c296557e5" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="109dc9ad-a6b8-47d1-9d73-12c0e7c58a95">
                     <td class="cell-title"><a href="https://www.notion.so/Fun-es-109dc9ada6b847d19d7312c0e7c58a95">Funções</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions">funções</a></td>
                  </tr>
                  <tr id="3df199a2-68a6-464d-8f9c-60103d30193a">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-3df199a268a6464d8f9c60103d30193a">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB"><a href="https://docs.google.com/presentation/d/1wZObgXKYJDFEJUTt3IfT3ntQl2IZo1dX/edit?usp=sharing&amp;ouid=111286512786680935735&amp;rtpof=true&amp;sd=true">slide de apresentação</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="8459d8cf-f27f-4253-b901-e22452fd581e" class=""></p>
         <p id="46a53da0-ecc2-42e3-9b40-20d3266c58f5" class="">Andamento da aula</p>
         <ul id="9fc2ccd2-05e8-471a-996c-d92a4adb6fa1" class="toggle">
            <li>
               <details open="">
                  <summary>Funções</summary>
                  <ul id="75b1866a-044a-4750-86b6-6a576a3e8fc8" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Como declarar?</span>
                     </li>
                  </ul>
                  <ul id="8e2e2e0e-0b5c-472a-bc33-96713bc6a082" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Função com parâmetro</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="09f1ec9f-2789-4be9-a314-08c07d9a50e7" class=""></p>
      </details>
   </li>
</ul>
<ul id="dec055a0-8bf3-4b6d-a860-9c3a163ec638" class="block-color-yellow_background toggle">
   <li>
      <details open="">
         <summary>Aula 6 – Aprofundando em funções <code>() =&gt; {}</code> ✅</summary>
         <div id="f6feb0a6-a1ae-4ded-97c5-f1af8f894e3b" class="collection-content">
            <h4 class="collection-title">Referências</h4>
            <table class="collection-content">
               <thead>
                  <tr>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle">
                              <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path>
                           </svg>
                        </span>
                        Name
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesMultipleSelect">
                              <path d="M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z"></path>
                           </svg>
                        </span>
                        Tags
                     </th>
                     <th>
                        <span class="icon property-icon">
                           <svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText">
                              <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path>
                           </svg>
                        </span>
                        Links
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr id="70d3d4d6-ca8c-4707-b4a9-35fafddc6ff6">
                     <td class="cell-title"><a href="https://www.notion.so/Tipos-de-fun-o-70d3d4d6ca8c4707b4a935fafddc6ff6">Tipos de função</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions">tipos de função</a></td>
                  </tr>
                  <tr id="e0a28b70-bd23-41cd-a724-ed642c96a984">
                     <td class="cell-title"><a href="https://www.notion.so/Criando-uma-calculadora-e0a28b70bd2341cda724ed642c96a984">Criando uma calculadora</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-orange">Dev</span><span class="selected-value select-value-color-blue">Repo</span><span class="selected-value select-value-color-green">Theory</span></td>
                     <td class="cell-~GqB"><a href="https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript/blob/main/Aula%206%20-%20aprofundando%20em%20fun%C3%A7%C3%B5es/calculadora.js">calculadora</a></td>
                  </tr>
                  <tr id="4974d92a-d8c0-41f1-8117-f9ade50ff00d">
                     <td class="cell-title"><a href="https://www.notion.so/Slides-4974d92ad8c041f18117f9ade50ff00d">Slides</a></td>
                     <td class="cell-?Ktb"><span class="selected-value select-value-color-red">Presentation</span></td>
                     <td class="cell-~GqB"><a href="https://docs.google.com/presentation/d/1ZXyMU2B4kuyMFS1-yZ3boMweXT5VgBtb/edit?usp=sharing&amp;ouid=111286512786680935735&amp;rtpof=true&amp;sd=true">slide de apresentação</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
         <p id="5c35ab96-2512-45b3-9cd2-dbaa2ec15ca3" class=""></p>
         <p id="a7f2dc61-1403-436e-8623-58d99c52b8af" class="">Andamento da aula</p>
         <ul id="daa17c7e-7abf-4118-a892-ea6958b53764" class="toggle">
            <li>
               <details open="">
                  <summary>Tipos de função</summary>
                  <ul id="7cfdfba6-e12f-4586-ad7a-17ee17ad26b9" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Declaração</span>
                     </li>
                  </ul>
                  <ul id="a1471e9c-1e39-4c08-96af-117da2bc3f65" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Expressão</span>
                     </li>
                  </ul>
                  <ul id="8b2eb47e-3bb2-40b8-9223-df06cfb82cbd" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Função anônima</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <ul id="c2c825a7-5837-4b17-9ea8-00da6f8fe8f0" class="toggle">
            <li>
               <details open="">
                  <summary>Funções aritméticas</summary>
                  <ul id="93c1a812-51db-40eb-8162-9cfdd8e5cb03" class="to-do-list">
                     <li>
                        <div class="checkbox checkbox-off"></div>
                        <span class="to-do-children-unchecked">Criando calculadora</span>
                     </li>
                  </ul>
               </details>
            </li>
         </ul>
         <p id="04db4bf6-4092-427c-987f-d7c9f44faf24" class=""></p>
      </details>
   </li>
</ul>
   
<br>
   
# Sobre a autora:
   
   <p>
    Programadora e desenvolvedora Front-end certificada pelo programa de capacitação TRANS.FORMA ofertado pelo Porto Digital. Estudante de Psicologia (UNISÃOMIGUEL) e Análise e Desenvolvimento de Sistemas (UNINABUCO). Musicista profissional, violonista, multi-instrumentista.
         
<br>
      
Caso esse repositório tenha te ajudado com seus estudos de alguma forma:      
- 🤝 Fork este repositório para estudo e contribua com o conhecimento.
- ⭐ deixe sua estrela neste repositório.
