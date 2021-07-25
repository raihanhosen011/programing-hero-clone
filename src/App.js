import { BadgeCheckIcon, BellIcon, CalendarIcon, DesktopComputerIcon } from '@heroicons/react/outline';
import { PencilAltIcon, StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import Carousel2 from './components/Carousel2';
import CarouselFeedback from './components/CarouselFeedback';
import CountDown from "./components/CountDown";
import Criterias from './components/Criterias';
import GoComponent from './components/GoComponent';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Module from './components/Module';
import WhyComponent from './components/WhyComponent';

function App() {
  const [active,setActive] = useState(true)
  
  return (
    <>
      <div className="home">
        <Header/>

        <section className='hero py-3 px-3' >
          <div className='max-width py-5 h-100' >
            <HeroCarousel/>
          </div>
        </section>

        <section className='notice pt-md-5 pt-lg-0' >
          <div className='max-width px-3 px-sm-5' >
            <div className='notice__wrapper p-4 bg-white mx-auto' >
              <h2 className='notice__title mb-1 mb-md-3 bangla' >রেজিস্ট্রেশন শেষ হতে আর বাকি</h2>
              <div className='notice__countdown' >
                <CountDown/>
              </div>

              <div className='row px-sm-2 my-4' >

                <div className='col-md-6' >
                  <h2 className='bangla d-flex align-items-center' >
                    <span className='blue__gd me-2 shedule text-white' ><CalendarIcon className='w-15' /></span>
                    রেজিস্ট্রেশন শুরু: <strong>ডিসেম্বর ১০, ২০২১ (শুক্রবার)</strong>
                  </h2>
                  <h2 className='bangla d-flex align-items-center' >
                    <span className='orange__gd me-2 shedule text-white' ><BadgeCheckIcon className='w-15' /></span>
                    রেজিস্ট্রেশন শেষ: <strong>ডিসেম্বর ২৪, ২০২১ (শুক্রবার)</strong>
                  </h2>
                </div>

                <div className='col-md-6' >
                  <h2 className='bangla d-flex align-items-center' >
                    <span className='yellow__gd me-2 shedule text-white' ><BellIcon className='w-15' /></span>
                    ওরিয়েন্টশন:  <strong>ডিসেম্বর ১০, ২০২১ (শুক্রবার)</strong>
                  </h2>
                  <h2 className='bangla d-flex align-items-center' >
                    <span className='pink__gd me-2 shedule text-white' ><DesktopComputerIcon className='w-15' /></span>
                    ক্লাস শুরু:  <strong>ডিসেম্বর ১০, ২০২১ (শুক্রবার)</strong>
                  </h2>
                </div>

              </div>

              <div className='notice__btn rounded-pill p-1 blue__gd row align-items-center' >
                <h5 className='col-12 col-md-8 col-lg-9 m-0 p-3 p-lg-0 ps-lg-4 text-center text-md-start rounded-start text-white bangla' >
                  তুমি ৪র্থ ব্যাচে এনরোল করতে আগ্রহি হলে, ঝাঁপিয়ে পড়ো
                </h5>
                <Button cls='col-8 mx-auto mx-md-0 col-md-4 col-lg-3' text='Enroll now' icon={true} />
              </div>

            </div>
          </div>
        </section>

        <section className='course__panel mb-4' >
          <div className='max-width px-3' >

          <h3 className='notice__title text-center mt-5 mt-md-0 mb-5 bangla' >এই কোর্স থেকে কি কি শিখতে পারবে:</h3>
          <div className='row' >

            <div className='col-lg-5 mb-5' >
              <div className='radius preview-card bg-white shadow p-3 p-md-4 p-lg-3 pb-md-5' >
              
              <div className='preview mb-4 position-relative' >
                <div className='previe__image position-relative pt-0 bg-white' >
                  <img className='radius w-100' src='https://web.programming-hero.com/public/1622954504238.png' />
                  <div className='playbtn ' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" width="92" height="92" preserveAspectRatio="xMidYMid slice" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}><defs><clipPath id="__lottie_element_2"><rect width="92" height="92" x="0" y="0"></rect></clipPath><linearGradient id="__lottie_element_9" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-133.99200439453125" y1="-0.0010000000474974513" x2="132.38400268554688" y2="-0.0010000000474974513"><stop offset="0%" stop-color="rgb(252,94,81)"></stop><stop offset="50%" stop-color="rgb(249,126,99)"></stop><stop offset="100%" stop-color="rgb(245,158,117)"></stop></linearGradient></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(0.17005972564220428,0,0,0.17005972564220428,46,46)" opacity="0.8" style={{display:'block'}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M0,-159.93600463867188 C0,-159.93600463867188 0,-159.93600463867188 0,-159.93600463867188 C88.26899719238281,-159.93600463867188 159.8260040283203,-88.37899780273438 159.8260040283203,-0.10999999940395355 C159.8260040283203,-0.10999999940395355 159.8260040283203,0.10999999940395355 159.8260040283203,0.10999999940395355 C159.8260040283203,88.37899780273438 88.26899719238281,159.93600463867188 0,159.93600463867188 C0,159.93600463867188 0,159.93600463867188 0,159.93600463867188 C-88.26899719238281,159.93600463867188 -159.8260040283203,88.37899780273438 -159.8260040283203,0.10999999940395355 C-159.8260040283203,0.10999999940395355 -159.8260040283203,-0.10999999940395355 -159.8260040283203,-0.10999999940395355 C-159.8260040283203,-88.37899780273438 -88.26899719238281,-159.93600463867188 0,-159.93600463867188z"></path></g></g><g transform="matrix(0.16787458956241608,0,0,0.16787458956241608,45.99852752685547,46.00018310546875)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_9)" fill-opacity="1" d=" M-133.18800354003906,0.07699999958276749 C-133.18800354003906,-73.48699951171875 -73.40799713134766,-133.27999877929688 0,-133.27999877929688 C73.40799713134766,-133.27999877929688 133.18800354003906,-73.48699951171875 133.18800354003906,0.07699999958276749 C133.18800354003906,73.48699951171875 73.40799713134766,133.27999877929688 0,133.27999877929688 C-73.40799713134766,133.27999877929688 -133.18800354003906,73.48699951171875 -133.18800354003906,0.07699999958276749z"></path></g></g><g transform="matrix(0.19639135897159576,0,0,0.19639135897159576,47.891334533691406,46.00018310546875)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M38.56800079345703,13.565999984741211 C39.981998443603516,12.151000022888184 41.78300094604492,9.96500015258789 42.167999267578125,9.451000213623047 C44.224998474121094,6.750999927520752 45.25299835205078,3.4079999923706055 45.25299835205078,0.07699999958276749 C45.25299835205078,-3.6649999618530273 44.09700012207031,-7.13700008392334 41.9109992980957,-9.96500015258789 C41.731998443603516,-10.144000053405762 41.380001068115234,-10.527000427246094 40.92300033569336,-11.024999618530273 C40.06800079345703,-11.956000328063965 38.840999603271484,-13.293000221252441 37.667999267578125,-14.465999603271484 C27.12700080871582,-25.7810001373291 -0.38600000739097595,-44.29800033569336 -14.784000396728516,-49.95600128173828 C-16.969999313354492,-50.84400177001953 -22.49799919128418,-52.78499984741211 -25.454999923706055,-52.91400146484375 C-28.283000946044922,-52.91400146484375 -30.982999801635742,-52.270999908447266 -33.55400085449219,-50.98500061035156 C-36.768001556396484,-49.183998107910156 -39.3390007019043,-46.35499954223633 -40.75400161743164,-43.012001037597656 C-41.65399932861328,-40.698001861572266 -43.06700134277344,-33.75400161743164 -43.06700134277344,-33.625 C-44.481998443603516,-26.038000106811523 -45.25299835205078,-13.694000244140625 -45.25299835205078,-0.06400000303983688 C-45.25299835205078,12.935999870300293 -44.481998443603516,24.753000259399414 -43.32500076293945,32.46799850463867 C-43.292999267578125,32.5 -43.18199920654297,33.051998138427734 -43.0099983215332,33.909000396728516 C-42.487998962402344,36.51499938964844 -41.400001525878906,41.944000244140625 -40.2400016784668,44.16999816894531 C-37.4119987487793,49.56999969482422 -31.882999420166016,52.91400146484375 -25.9689998626709,52.91400146484375 C-25.9689998626709,52.91400146484375 -25.454999923706055,52.91400146484375 -25.454999923706055,52.91400146484375 C-21.597999572753906,52.78499984741211 -13.49899959564209,49.44200134277344 -13.49899959564209,49.3129997253418 C0.12800000607967377,43.654998779296875 26.99799919128418,26.038999557495117 37.797000885009766,14.338000297546387 C37.797000885009766,14.338000297546387 38.56800079345703,13.565999984741211 38.56800079345703,13.565999984741211z"></path></g></g></g></svg>
                  </div>
                </div>
              </div>

              <div className='course__panel_status mb-3 grey-bl fs-14 text-center d-flex align-items-center justify-content-between' >
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA59SURBVHgBtVtdjFVXFV5r38swUApDoA1gKoNt1PahYGM0ppoQSX2FIkEfjPyIhvrCQNQ08aU+aNSmZWhigtoKvJlUIn3og5o0aGjaB4OgRttEU6AxphRhEB1g5s5Z7rPX7773QlHhZGbuPfucvff6+da31t7nDMItHDSxaax3bXQddGgjYFpPiOOAMAYJ8wdQPkfKXzAlaBvyL0FKpQ0QeZD8SUnOy71I1J4klD5o13IblYHzuGUsLPe191/O307lwU91kI7P3/PcS7ciP76Xcs21kT0N4kSeaMwUEIGoFSEhhPPyQcjaoyoL7WcR2JVJPI4pIgqzYeS+FBTnz2JQlP75+9n8/fC1GTiydO/kmf9aybkvf24PIT2VJ10iE6Iq0idssYefs9Ak94sXydpbERO3kymbGxKxomqs1nPBk1Qu6TVgFLjnz+STpxZ8df+RYbqkYY2zu7bsb6CZpBaS7TCoxqAbWIUlaKUkPSewr9aH1KpE5SLyRzkncZXYvtWCT0QT4vsQfRSbCWB1lvXw9MF9++FWlOzt/Oyh/DGhQpk35JRFMFlYILmloE3lLzq0qhYHYezIChXrFbwWX5EKjaY8tp/lh0QM/kscpaw2tyG30p5//2jfoZsqObdzc2uJbWgwAzZ6cRFRvxeLQqG9KIAYHMf80RSZSVUgtVH1V7FSXKjKMCRVITdzNDiZeVhO2D7946/tH6rkzM7N23PgTBQhScNBxsE4PIQxJVB8YgxwRBWGTY2qnHkB1OdoMC5CW2c2skCXgt341noc0B5tn4npH+6bqBqvbt80PgKdV5oEa9DIhS1oBKJsVwzcTmA0z2TDDArMfuCkkYRlpG97L0XGjCwLhXB0THUDq9P+JA1K8UA/+yZDb5u+pma6c2uW7picKp7sQtqWG9dgH61E6CEIlTCBEyMDAympJyWCUBmLSGFP7E4Pcx+dWctxqURccV07KYXzAYBxVGh4j430uhM2zdz2zW9lAVarxUiDX/Kde4ETPFY5Uag9uQfJqZ0ZIaIBoU4RYCkDFBmoaQVJCwYpCIRzCsLE1exBKS7YXoq64s3UW5Poi1s25ourPbQ1ANCTd2UqJxTFRoPqaGSxxN5IbmmSfqTUqCkiDK+xWHiyxKL7vASqQQsD3wi1uoeZ5pjAxkZp3trUYG+90jzPiZYClKTLXxxITkrqhAYwCsBDHUy+ZJEJhNegOvrhy1ViZFVBT+gYshIEkkPp7vkXcVPKYq1jySx00NKWUlxIvwWRngvZm2I6iRGUvM3KlEEbUqn6nCey6Ng6lKVYjNpzpaPkQMEFcRw0BAgi1rfAXqsT8EBoXdHwJZ1tQicfILLEIN4mCMmQrSeT2iQUOU39UEQSbvS8KMRdFxFWC1G4jZwdZVjuOt56cikbTe53qBNjxko6EnxiLRyQ1w4CYwqI78fZsENF1q9kdanDVeaP8JR6JxCER6waIHt/iQEA44g6EAHYr1JjI/ULBmU00sGLjyLQ0uXQ2bARYMFdZfYU0GV6z18AnY9vAFyyjC2CFjc1k2BVDktEFJ+Xs2hGxkQBUcFhEtpGCSaLtSCJwyDEliU8NDl81SHqpkcfg86nN0J66CPljgaU/z0lptUfgu5jW6HzsQ0moSul2UKoG2AQEhI0xhkYocxdusI4TNnJGFrI0Vlbv2sqU6OUKZIrWDy4ZAnBwsWY7l3FbctXQPrAh+ViImXdks5WjZd70rKVgCvuA/rnRcTr01I6hCpccySwIDRAye5FTCEZ5YTZ9VRgiA81stILuxKFaDHkCohTjcwHvP9BgCVj3H/+KF9bNAa0bIUoyWMnZheEu8d4gJERSCvHCbLSdOk80DvnqJm9XqzdWETx7BAJGk1A8T+Gy4IEcOoisFSt8A/gECsIfaIRqI7XzcXhgxmWi8eUaLWKGzxIM06dASQ7IS69F9P9D2end0hwGqNf0hAps/bRNFpMamsCz/7RBNpfFJZFnUlFoEneuOb9DwCMjoqsbPNm+gqPNzvjCZ+quMmrg39xc2+2VnfeCOI97+OiES3b15WEBZJ307orJpquTsYIVcpMziBFF96o0iGZiyXFyE2YPchf3Hv0xmmc+/vbbZxZGs2+siqoyHvxPPVOvIx0ZQr6UwQuXwXNO+eEBXQi5HghrZVJUw5q8UHCGspxyaxL5LBWQyFaAreEWXBWkRzCSPbg6ALhL5JtkPIJdPmi21lI0KDO4yFcmTLsxoDDThdw/mjIlVYVW/mgQSqqUWRX3SxJQJopw7Qhg8QiW4ykezmWWFFgKvxLMb9qfEabUFj4CtcxeZsxQBzTStgJvCkho9RsVgIb0ylYi4KcQiCA3lK5GyowKFHj/aUwEXTdtQhw/AGMJW9lfvuJdF9Tf4mQKKGWl+fehJJSdCmAlgMcdDK2tuiaS/JeXi9LwgMzrpqqdKQmDNVWLJLQA4Xn7wvvhvTRT0WR/5cDh503f3y95E5u4eRZx4qfC1SlbCLGRuKNCwIpxEN6lYREahpBp7qYowvfqya9HUco57xKdkHVb1qtgDRZfLaIb4TuKaCMDGSutqZStCJI9nPuvKLV+BTcpgAX9SzF9QtUCjn+9WJPiwEKwRRo0daLAAD1mukOHFqAA0As0FFzIhgZIUEs6qV4R654LC2g7AZSdCKAqcwljzOUpJ7hnrw2Db2nv069579XNc/ufxJmDzxZ9ek9/22a+cE3ga5PDx3Ks6oQpC+m0TaXPf8otpXgypaRZHBOqEGxSAWmmu7hSP1wU0+WW0cX1m0gGS225RxbJpm/EIYpqCIIK5jnAjbFA0rQVvKVpq4nCKmAUdmpnkiGJ6Yj4XetO4YdWbl533h6oHlk73cH2uZ9Yd+NIe9JKVRikuzjagkcfqSrFinpkyXH5NWNEoyXCTJfSEYIUOfDO3WwRC6DJf1WzQbkauUVq4xEfFuFxD09gDBwLH8AbDuD++Pg1ls4mpMnoPnTybrtd6/C3KlX67azb8Lc718bPohXFboLa4J5nWwVgodmKBS6vkDWbdCYE0Np4otnXZHycJiGy3bpAvR+9kLZAkkPPWLtvWOHCow66x71thcPAs1czbsEH+RtkMHRGLQJfVGMnreNQJh1PXLlajcsoTjruXKxCBpYGApxcfeL7w6I1SrX3fKlvL9Tk0nn8R0IfZjpfGYrQGbWoQpev8pZUJ7OAyoTMChVIfYe/zGfgyrJwqJv1kpVqOEa1k7G2xa6LeDz7BcvEFydxn6F0iOfHJA5etDaHv4EDDvaJRq9+7bypbKPLfBIM3eqdl+IfIOmnDrW7IkZVhtSzs6WED1KHLw495tfwO0+5v7wukFPkaMi2LJdKk1nYZEtUFHyYAy5gHwQJiXuhlE3KRo0fza/+jnQX9+A23XQ+b/B3Gsvkyf1IlcVR2xiq10tY2KMVxrCGhKAFaNqka6ejMucIAL0Dn6H5k78Ev4v5XJszv32FZj56X6AsFcBzqN+L3EBDWBmJ62xjfXbEXrbHjeuIS9kFbjyvkIJfEvA+qjNLIClQJR1ab687B6EVasBV96nY3ktoQMH7tZx6PI/gP5ymprrVxGTcMLgay5gj/ASP1doZWnXuklk8seJTCldp1qWXX0eaAZVINta1vToABcrSZVx8QLAVP7980mGlD2fBH+KrBpmgd1gSR5MYLUoDnwAtohClzJuStpzU9keblkoxXqmP01Q3C0PR4SM7irIg0lnLMENhWcpUJUuUNehGPKVrgXRaAGjRXUYTu8YRPI6AUB36vl9qksmOoWQtvF8WxZ90VYKdPQkS1LyxYW3iAuWiMEkIrLHBS43KpND2Dclkyy4NiRwG10giGYoWQYgXmqBdBaiV0Dhjx7sStWhcCCDqPqh8q/c5mkbavKuizPQwjK62gLAPEmWztR8YCxK5mteSfL6spyezjsD9Gudrnq4KTyFAQNg25MCI44fFx49fEg0s415qsX3LQ1fCttc7AWKMFYRTFICQwWIfo1uUZJjP5fwp1MO/GM6MYpl9Z2AYimsIWKSGVqcpNRjFiYhzKDKuOIJtNfI6rCXVb2QsKuHbm3X2xMcOkCMK5oGj6dc153KF6YoMKo+rcIkPOXzGHyI3SHVQB8zCSBQX4oJKERdwUiOkzW4Q4R4PPVkeCgPtniEsBoxGGAtAE9yZvGu7x9LePjYVD49EELZvEd1ncvySu5VS4lRFJLiKpB0ARYv2uqMw5QM/etzByFL0b9DR24ABWfwAARubPseab/Ly0rNZCbaS2wrIkOE7sYRaSCQvWNH1eJNI9b5KVwDo3qs2VsThe1GoSCOwKMNAg70cY7HXJ8XBBTFgGdSr3fYlCzeJPyWJgodwN/ysLAMz74kbuVmTS/mSrT0SDo7OdM7dWidQH4VZV3o7oU4sqppzOVod31T+/7rE/yir9WuncMvHsg3PycDicsVcmTLcAcEVu/2DGzaUeAKwZGzp6REFbNhb0paKCqQE5eZUacFGyR+M1JrvxxYsOuZI65wOOYdOjqRZzhMdq9Oa5gT9FBNcaZN8L6XcaWboFfgH/s4hSlBOj9o6nFEWZHgCz+0+dhgRxZ95ZmJKNrAKqT7k6M78ggHyAtHxaF5N+RfiLcV/5R33gLfhhDnThXZ6pCo7/AA6XIXwV51gWRus/DHgArQWITJu3Y/u6Nfp6EbNPNeODqRR9iRe70FnlkgZKUyvK5rMKQWpUWm0poXnHDRKhb1hCyB5BtpDrWihGfnSNarOk9uvJR/9y7c/ezeYfog3OS4uvvz45l5t+Uxt+ecOQ5xr7PwYrL/KGhDtpEVhBMKP4aK77eWN75sqcTvrpQKOskaXN7OJHaghx6i/gcBL4p5CzbndzywcBFM4o7JqRvpcVMl43H9ia2b8uDr8/xr8+JlXe45JkqAr/OCcAADa0EKilJ9vTJeu/ay/xjgZRkTH7ZKwZkOdo5TB18a7cEp3Htj5fT4DyIGmYpTv36bAAAAAElFTkSuQmCC" alt="Time" />
                  <h4 className='fs-16 mt-2 black mb-0' >3</h4><p>Month Required</p>
                </div>

                <div>
                  <img src="https://web.programming-hero.com/static/media/enrolled.bb880bbe.png" alt="Enrolled" />
                  <h4 className='fs-16 mt-2 black mb-0'>4898</h4><p>Enrolled</p>
                </div>

                <div>
                  <img src="data:image/png;base64,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" alt="Certificate" />
                  <h4 className='fs-16 mt-2 black mb-0'>Yes</h4><p>Certificate</p>
                </div>
              </div>

                <div className='course__panel__system d-flex align-items-center justify-content-between mt-2' >
                  <div className='mb-1 p-1 bg-white shadow rounded-pill d-flex align-items-center mb-sm-0' >
                    <img className='me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPzSURBVHgBjVZda1xVFF373OmknUQyqUXEgJkG6ifoPPj1ZCcVfBL8Cc0PEJr6pFIxFcQHEew/MP9AX0QQyYgigkhGWkr6RSdJS2khnUmgQ5JJZ3efs/c5907SlF64Offes8/ae621z5kQnnBxba6K7MjHADXkrQGicRAm5N1Pt2Roydikq98sPAmHDgR3lTMyOyd3NXx0KZR1JfnVFEZQW55+pMtfn3+qJFz7rIaMFmVxzWZZAYnyaLKVcWSNAVbw0M3Q8nz7wCR84ou6QC5q9ZTPBhaUrwiAbGzi9zTfhcMMteZb+5IEBoeyJXms7gNPVXME48BsCDwkZEu+AXJ1Wjq3EmASjbJTBiRRHty5qDtr9Uk2ueOc4wAc4q1kJxOOxFMscn0++FkKZb107isJmLKKKWjskgdq7rFngKMV4VlRtN42sLpO6O0U5SJj7ws7jtKhM/JyXrm/8uVN+Tul5lJRSEa5RHinBkxORDCWGiiMPra9DizfkWT9yFh1pRDTQaU/nUmCWfk8K/JoFX6hM0nGyoQPXgWeHYOBKoxzbHCyayqESVFlrQMMBprcGXtyh/EwW3by4aSCmuauYOLrk8DoSG5ufpH5pp6MjjDemiLziPJCA6uG5KS6TpqZsASexfFjw93z7jTw4WvqS5TNmhovjAPPjZEW6TgVmrmTJU1iGiIGyOgTJG/sz/sngBHplZefB/68Rrh421fMof98SPUIcL+nb6HooM+Es/Yzin6CVesoE1GsVRP4a1zAPnoDeLuGaHUotDpqCZArIO0sSVynoGFxf2iVsYv2+5Jv5di+ZE3hnHamNhJ7DhsJyBXuzW1GzkETbu8qqB8XrzD+W4V1mkZt9ZGYuNgA+F88QVNeTu+pSpL08gMxbsrfl73ujH/bJIlsls1sKWKtk2+DuI6pJdPZH+nIDoxswfoD4M4mBwawhZduM/66TtjZjXLmx8tqhwLDoofarU2HQf8neekOUcxIK2qtyfHRL54CZD5hqKjeDuH6vVxqir5Qm5qfLjg5krvIcCF8jAFRtt0B8PcN4FZHPQmsQAncS3V307ez+hHXJV94IakdTsvDI0sSMGXSFcBY+VfKwItH5QQom2fSGN63+70iuD2HQtv029x0bqlP9N638ovo7PekAK4J8wpR1Hvvc/rWlRO4Tr98shIaMyahfz5vC/sZkaSTvKF0YFKhNXOzo7zFTRv2XdaICYaYJEYNYcQl/wNW21chgLSnYiPEY0fHm6DBKfr1bLuI+ZhtHJN9Ny9VnlafOP5XwrlkVFwt3ckXsIUfqHm2uxfrwCQp2anvZwWwIfebIm7dfJJ2442wkWUfYGvw8+PA4/UIzfMlz5vzxeAAAAAASUVORK5CYII=" alt="Time" />        
                    <p className='mb-0 fs-12 me-1' >660 videos</p>
                  </div>
                  
                  <div className='mb-1 p-1 bg-white shadow rounded-pill d-flex align-items-center mb-sm-0' >
                    <img className='me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgBjVbNaltXEJ6ZcyVLpU2uoQsnFKwEumgpRITuozxBQn8gFEpESCGrxG533TR5gOYHUlroovamdJk+gdUnsFxCMV00ShYN/QHZrbFiSfdOZs6cc3St/JAj2zr3nHu+mfm+OTNGeMnglfN54Y6cKzPsMGEHHB5lokUgBHTUhwz7yNSrf/nt+stw8EXg0/K1a+xoRYBzAVZQYJJNR8wO9RsYESGTRcQB1GituXr3xisZGV250HION8TLlgKJ1wxiROao4BKRroHOzbDuAYPNHyJPzjZXvxtUMan6MP7s43aGvCmmWykqdUQ+rLPoFc77JgvsF1vs6pt736y0n2tk1L3QIpQIAHIM6BGUw5zjRGbod3BmD5OpowK6Mbr7xfIzRmq1YkNO5h4eoUokhyUvARze4pkL8WX/Ug413hj+sKJ4kOmf4tJHX4mXy+aOfErxlFQMGW8sIi0d8zogmateC4XSd7gAPNiH8r9/1Jy5gT7oE40xXZOnG35teunDBwKyLNmEJqBmj4AtHWd8+130dJPxgYqrjkiWeUgy7/mvAZfDx3oWxQku9Zvc8KA2PUnj7gddsdryJ+b0xLdOICfKbaqJIINVFlZzRi7Qm8djJMwRDDlvFO5cJv6cMWVYz1SVYFhoYNQA33sfqV4HfrIH5e/3DQPNsEeuLahkibGgmEQDHWW5DSmXghumdDLAtTpgMWHe3wPY34/xeK/EF4xH/CkzE43LE53J5KkdkiKCcqAn5Q9MxlD81kevi0aNFLJYf4g5ZIzxhMFPY1keFrOYD+kupAwNmRys0junIGDZon1z+WgbYTq1O0JYOR8cJMjVtyFHeH9uJovnXH+FLojcVYfSNZkk/qPwFRPeuN6TXdnIeQ4CQyZEunj7V31CX8fQpzh7DBfpssij8BGPS9xSTXoyvzhfjzhUqCS83BdfxAg51jN9r/jjftAmrCcnTX2hqq8y/hI3sVJCom4AeLhsMGM13EgJl1p1LBZzMrJW9jIH5b0C3C05nHsBLASrL+MnwA25K0JXub1lGy5QT2BtwEIQ8ccpAgvCyzNoXr65Trh2b0dKwZ2YMVgptuXjR8lhK5DmcWAiymDTf//0B61kWrQyX08Bc/d8PnG1TcpC/VLeQw3ipWOIrx/RMm31i6xx+T01J4lQ7v4NPPo/7Um31HQeNK/cOllh1fpJVi83td2GFmuZ5Duj5mHojsGQ75q+UxKEFuy7pXVR3GkuuDZe/vqhYqd+0lz7acCcnZW3hzFzOLpBlmgc+fHZFEtH4GiWK8OsoE40cMiIjvr3P/anDKcFaBCwoFrwQp4xpkZlpQpmkj/AKZ2uX725VcWdv8NpHFz95LqEfVG4XxZKfJ/RzNI+AYkW6z1C045we6eRZbdx9fbOPNYLjcQx+vzTrvzn0iFHpwS0HfQYlgS7lLmeGO01Rgs/4/VnweN4CmRG2wfw0xt1AAAAAElFTkSuQmCC" alt="Time" />        
                    <p className='mb-0 fs-12 me-1' >300 quizes</p>
                  </div>
                  
                  <div className='mb-1 p-1 bg-white shadow rounded-pill d-flex align-items-center mb-sm-0' >
                    <img className='me-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPHSURBVHgBjVU7aFRBFD337SaaGMlaiP/kGRSxcmNhJbgprAWtRCTRVlB7C7XTTgVtNaCtn0qssiIoIjEbUUEJZAMmFn6y+UOSfdc73zcvuwnO8pjZ+Zwz99zPEDZo/CwuoJA7hXpUQp1KYOpEHduQEOSryP+K9GU6/WVwIxxqCj4k4FF0RQCvIokKGpQ1sPTyS+w4ITLzqAK5R3Tm083/IhGCWGaHwFFsAQQ2MoAeHMgQJ8R6XMcEONdHZyvVEDNaQ1BEDiMgitNJdVuoD/oL78bBZdUeyDnmEX5SLDYl4aGdMVrEAqCQEmCtnXaOOSWjlFhTcaf8GeInvd0NJNjUagj0ncmC2YPsGAJAODI2UqVGkcZhIXpYLHgSft91XRa7LZTAykHykpAZc9YiYwVpOV1LQJZQXWw/8hI87kr8rmtcJrslVF20OMeyn3NO3naM0b6fMF9l/B4FVldtlKmoixyRnNMXmEaS9ET8bt+ALMf6Rl4Fq3U4p2Rp2w1sEQKS8ZaYsOskIWqhwEBjsrZOT4tsuVORjE9YmTkbQew9odvWw8DKHDDzGR6kpYPREbMHNv4MSPVcSezjYuBceMJw8+Y9QO99wvFnwHIN+FuxuovJS79s+Hp/pldTFoNOkMilBkb7xKz4bK5bXxyXwGvbYwgXJ4HPt4E/H4HW7WLZmNHfJSq8P1zi1qJUSxsxCdLkU2cOXUsJVGuX8bF7wA5ReXaMfXS5U4zQR2qhID6RCPB5gYxKkJhAVz8a2uKUWPKBvTzspAL5PEsRpSgxZoyTg1Khvra9jJ7LaNreDgALU6n/KEhSXYYY3iKiUSVXOTWP0829jwn5rY0E3x8wFibtJjQ6m50aXpFKhIRfZ3R1bPnORoIfEl3f7pMHc7WLKPCFk89BJeUIy7nnMqyZCbI00s9/zRIsye2/3DKnlfM7YsmdbtZ9+25KiyWFElbp4vBgnvqqNX4T35WV62YDsw7fqacmPxTpyjwwfImxOivrrYTtUlq4hfylVhaBuZ+2XqoIZVvDaNDrql9C9Y6oImlinH2fhDFv86Zuo8flR7juah5TlfqHe9RGnSfKGnnV+mRhJiORr0W2pHtfMDLV16WAD1qeQT7pc6v+PRGiqlRMtTCdBbA+8v5yAnCaDxzUJOJpQS3RuZGJBhJLJEUpOSqYVYedyWB7TSB42Py67saxgqN0fmQ0g4t1Gr86cEPu0G/eGXJvSnM/MIncdBfLuEMXKrW1WOuSeLKXBwdQz5Vk6xGpa0X9MLFImkil4Kgs4GUsRi+agbv2D8TP3MyJQqJwAAAAAElFTkSuQmCC" alt="Time" />        
                    <p className='mb-0 fs-12 me-1' >11 assignment</p>
                  </div>
                </div>

                <h3 className='course__panel__price mt-4' >৳ 5500</h3>

                <Button cls='place_center pointer w-100 text-white text-center mt-3' text='Enroll close' />
                </div>              
              </div>

              <div className='criterias col-lg-7 px-md-4' >
                <div className='course__criterias' >
                  <div className='mb-4' >
                    
                    <ul className='criterias__row row' >
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                      <Criterias/>
                    </ul>

                    <p  className='mb-3' >তবে যারা একটু ফাঁকিবাজ তাদের জন্য দুঃসংবাদ হচ্ছে। প্রত্যেক ভিডিও এর পরে প্রশ্ন থাকছে। প্রত্যেক মডিউল শেষে ফাইনাল কুইজ আছে। আর প্রত্যেকটা প্রজেক্টের পর একটা করে টেক-এওয়ে হোমওয়ার্ক আছে।</p>
                    <p>এই কোর্স ফলো করে কেউ যদি ওয়েব ডেভেলপার না হতে পারে, দুনিয়ার আর কেউ তাকে ওয়েব ডেভেলপার বানাতে পারবে না।</p>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section className='course__info' >
          <div className='max-width py-md-3 px-3' >
            <div className='d-flex flex-column justify-content-center' >
              
              <div className='course__info__header text-center mb-5 radius position-relative d-flex align-items-center justify-content-between p-3 px-4 bg-white shadow mx-auto' >
                
                <div onClick={() => active == false && setActive(true)} className={`info__header__why befor pointer ${active && 'pink act_col'}`} >
                  <StarIcon className='why__icon w-45 mb-1' />
                  <h4 className='bangla' >এই কোর্সের বিশেষত্ব কি?</h4>
                </div>

                <div onClick={() => active && setActive(false)} className={`info__header__go befor pointer ${active == false && 'pink act_col'}`} >
                  <PencilAltIcon className='why__icon w-45 mb-1' />
                  <h4 className='bangla' >এই কোর্স কিভাবে চলবে?</h4>
                </div>

              </div>

              <div className='course__info__body' >
                {
                  active ? <WhyComponent/> : <GoComponent/>
                }
              </div>

            </div>
          </div>
        </section>

        <section className='course__content bg-white pb-5' >
          <div className='max-width px-3 py-2' >
             <h2 className='text-center mb-md-5 mt-4 notice__title bangla' >কোর্সে যা কিছু আছে</h2>     
             
             <div className='row' >

                <div className='col-md-6' >
                <div className='p-3 radius shadow' >
                  <div className='preview position-relative' >
                    <div className='previe__image position-relative pt-0 bg-white' >
                      <img className='radius w-100' src='https://web.programming-hero.com/public/1622954504238.png' />
                    </div>
                    <Button cls='place_center pointer w-100 text-white text-center mt-3' icon={true} text='Enroll Now' />
                  </div> 
                </div>
                </div>

                <div className='col-md-6 ps-5 p-4 course__content__scroll radius shadow' >
                   <div className='scroll__content ' >
                      <div className='mb-2' >
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </section>

        <section className='slider' >
          <div className='max-width px-3 py-5' >
            <h2 className='text-center mb-3 mt-4 notice__title bangla' >এই ১১ টা প্রোজেক্ট তুমি করবে</h2> 
            <div className='text-center fs-14 bangla mb-3 d-flex w-50 mx-auto' >
              <p>
                প্রোগ্রামিং কনসেপ্ট, স্কিল শেখানোর পাশাপাশি আমরা আরও বাড়তি ৫ টা প্রোজেক্ট করে দেখিয়ে দিবো তুমি এই ১১ টা প্রোজেক্ট যেনও নিজে করতে পারো। কেউ এই ১১টা প্রজেক্ট বুঝে বুঝে করতে পারলে তাকে আর কেউ ঠেকাতে পারবে না।  
              </p>
            </div>
            
            <div>
              <Carousel2/>
            </div>
          </div>
        </section>

        <section className='course__feedback bg-white' >
          <div className='max-width px-3 py-5'>
            <h2 className='text-center mb-5 mt-5 notice__title bangla' >স্টুডেন্টদের কোর্স সম্পর্কে মতামত</h2> 
            <div className='course__feedback__carousel' >
              <CarouselFeedback/>
            </div>
            <Button cls='pointer d-table my-2 mx-auto mb-3 text-white mt-3' icon={true} text='Succes page' />          
          </div>
        </section>

      </div>
    </>
  );
}

export default App;