import Button from "./Button";

export default function Header() {
    return (
        <div className='header' >
          <div className='max-width px-3 py-3 d-flex align-items-center justify-content-between' >
           
            <a className='header__logo' >
              <img src='data:image/png;base64,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' alt='programing-hero logo' />
            </a>

            <div className='header__collapse' >
              <ui className='header__nav list-none nav' >
                <li className='header__nav__item nav-item' >
                    <a href='#' className='nav-link text-white' >About us</a>
                </li>
                
                <li className='header__nav__item nav-item' >
                   <a href='#' className='nav-link text-white' >Succes</a>
                </li>

                <li className='header__nav__item nav-item shoping__basket' >
                  <a href='#' className='nav-link' >
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB1ZRvEYJAEMXfMQawgUQwAg00giaQBtpAG0AEG6AJxATSAE1w7o7LuKLAMnNf/M3s8O/d8njcnfPexwBWeFM6544IATXP/Sc11RQBiKjYZUlVyT1uPEdoyPFN3B8QGm7qw3Dhfxm1+pcIA8eauZZzzruWy5zqjPFspHn19YReUMinZRgJR6H+W/ZL0OReYyQ0Zqtyj38JEiUwT8lB1yKa+tdCYlIYGXSthIWIChgwuVbitMndG7aCLteTDv1Jjtw4owF39JPIMadNr4LBTe3HE+sek57+a6oF7FxNrv8Xym4jmd+Ms6WQzPcwiDXpgHbZ0s+aZ1HHmJM6H5qGepuuqB69allxO6oEBkg3F32s7z8B27G4s+cPjwYAAAAASUVORK5CYII=' alt='...' />  
                  </a>
                </li>

                <li className='header__nav__item nav-item login__btn' >
                  <a href='#' className='nav-link p-0' ><div className='nav__item__btn text-white' >Login</div></a>
                </li>
                
                <li className='header__nav__item nav-item' >
                  <a href='#' className='nav-link text-white p-0 ps-3' ><Button text='Register' /></a>
                </li>
              </ui>
            </div>

          </div>
        </div>
    )
}
