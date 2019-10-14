/* eslint-disable no-undef */
const template = document.createElement('template');
template.innerHTML = `
<style>
        .topelement {
            height: 60px;
            width: 100%;
            background-color:rgb(250, 223, 101);
            display: flex;
            flex-direction: row;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            border-bottom-color: rgb(88, 86, 86);
            justify-content: space-around;
            align-items: center;
        }

        .return-button {
            margin: 10px;
            height: 50px;
            width: 50px;
            background-color:rgb(250, 223, 101);
            border: none;
            outline: none;
            cursor: pointer;
            display: inline-block;
            border-radius: 100%;
        }
        
        .return-button:focus, .return-button:hover .return-button-img{
            fill: rgb(255, 255, 255);
            transition: 0.2s;
        }
        .return-button:active { 
            background: rgba(255,255,255,.5);
            transition: 0.1s;
        }

        .return-button-img {
            height: 30px;
            width: 30px;
            fill:black;
        }

        .interlocutor{
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 300px);
        }

        .interlocutor-icon{
            margin: 10px;
            height: 50px;
            width: 50px;
            background-color:rgb(250, 223, 101);
            border: none;
            outline: none;
            cursor: pointer;
            display: flex;
            border-radius: 100%;
            
        }

        .interlocutor-icon-img {
            height: 30px;
            width: 30px;
            fill:black;
            margin: 5px auto;
        }

        .interlocutor-info{
            flex-direction: column;
            align-self: center;
        }

        .interlocutor-name{
            font-size: 32px;
            color: black;
        }

        .interlocutor-time{
            font-size: 12px;
            color: black;
        }

        .search-button {
            margin: 10px;   
            height: 50px;
            width: 50px;
            background-color:rgb(250, 223, 101);
            border: none;
            outline: none;
            cursor: pointer;
            display: inline-block;
            border-radius: 100%;
        }
        
        .search-button:focus, .search-button:hover .search-button-img{
            fill: rgb(255, 255, 255);
            transition: 0.2s;
        }
        .search-button:active { 
            background: rgba(255,255,255,.5);
            transition: 0.1s;
        }

        .search-button-img {
            fill:black;
            height: 30px;
            width: 30px;
        }

        .options-button {
            margin: 10px;
            height: 50px;
            width: 50px;
            background-color:rgb(250, 223, 101);
            border: none;
            outline: none;
            cursor: pointer;
            display: inline-block;
            border-radius: 100%;
        }
        
        .options-button:focus, .options-button:hover .options-button-img{
            fill: rgb(255, 255, 255);
            transition: 0.2s;
        }
        .options-button:active { 
            background: rgba(255,255,255,.5);
            transition: 0.1s;
        }

        .options-button-img {
            fill:black;
            height: 30px;
            width: 30px;
        }

</style>
<div class="topelement">
    <button class = "return-button">
        <svg class = "return-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="30 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
            <path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
                l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
                C52.942,116.507,52.942,124.327,57.633,129.007z"/>
       </svg>
    </button>
    <div class = "interlocutor">
        <div class = "interlocutor-icon">
                <svg class = "interlocutor-icon-img" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                     viewBox="0 -100 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
                            C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                            c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                            h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                            c59.551,0,108,48.448,108,108S315.551,256,256,256z"/>
                </svg>                
        </div>
        <div class = "interlocutor-info">
            <div class = "interlocutor-name">
                Comrade Mayor
            </div>
            <div class = "interlocutor-time">
                last seen 2 hours ago
            </div>
        </div>
    </div>
    <button class = "search-button">
        <svg class = "search-button-img" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve">
           <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
               s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
               C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
               s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
       </svg>
    </button>
    <button class = "options-button">
        <svg class = "options-button-img" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
            <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
            <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
            <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
        </svg>
    </button>
</div>
`;

class TopElement extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('top-element', TopElement);
