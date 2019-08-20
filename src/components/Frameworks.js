import React, { Component } from 'react'
import anime from 'animejs'

export default class extends Component {
  componentDidMount() {
    this.createLetterWrappers()
  }
  createLetterWrappers() {
    const frameworks = ['React', 'Angular', 'Vue']
    let frameBlock = ''
    frameworks.forEach((e, i) => {
      const spanBlock = e.replace(/(\w)/g, '<span class="letter">$&</span>')
      frameBlock += `<span data-framework=${e} data-cicle=${i}>${spanBlock}</span>`
    })

    const range = document.createRange()
    const fragment = range.createContextualFragment(frameBlock)
    const box = document.querySelector('.text-box')
    box.appendChild(fragment)
    const animBase = anime.timeline({
      loop: true
    })
    frameworks.forEach((e, i) => {
      animBase
        .add({
          targets: `[data-framework=${e}] .letter`,
          delay: (el, i) => {
            return (i + 1) * 200
          },
          opacity: 1
        })
        .add({
          targets: `[data-framework=${e}]`,
          opacity: -0.1,
          duration: 1500,
          delay: 0
        })
        .add(
          {
            targets: `.text-box`,
            translateY: '+=-70'
          },
          '-=1485'
        )
        .add({
          targets: `.logos-slider`,
          translateX: '+=-100%',
          easing: 'easeOutBack'
        })
    })
  }

  render() {
    return (
      <div className="frameworks">
        <h1>Expertise in latest frontends js frameworks</h1>
        <div className="frameworks__wrapper">
          <div className="frameworks__box">
            <div className="letters-box">
              <div className="letters-box__frame">
                <span className="text-box" />
              </div>
            </div>
            <div className="fr-logos">
              <div className="logos-frame">
                <div className="logos-slider">
                  <div className="logos-wrapper">
                    <img src="img/react-logo.svg" alt="react-logo" />
                  </div>
                  <div className="logos-wrapper">
                    <img src="img/angular-logo.svg" alt="angular-logo" />
                  </div>
                  <div className="logos-wrapper">
                    <img src="img/vue-logo.svg" alt="vue-logo" />
                  </div>
                  <div className="logos-wrapper">
                    <img src="img/react-logo.svg" alt="react-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
        .frameworks {
            padding: 2rem 0;
        }
        .frameworks h1 {
            text-align: center;
            text-transform: capitalize;
            font-size: 1.7rem;
        }
        @media (min-width: 460px) {
          .frameworks h1 {
            font-size: 2.5rem;
          }
        }
        .frameworks__wrapper {
            display: flex;
            justify-content: center;
        }
        .frameworks__box {
            padding: 1.6rem;
            border: 2px solid var(--pink-bg-color);
        }
        @media (min-width: 460px) {
          .frameworks__box {
            padding: 2rem;
          }
        }
        .letters-box {
            text-align:center;
            font-size: 2rem;
            font-weight: 600;
        }
        @media (min-width: 460px) {
          .letters-box {
            font-size: 3rem
          }
        }
        .letters-box__frame {
            height: 70px;
            margin-bottom: 1rem;
        }
        .text-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .text-box [data-framework] {
            opacity: 1;
            height: 70px;
          }
          .text-box .letter {
            opacity: 0;
          }
          
          .fr-logos {
            display: flex;
            justify-content: center;
            
          }
          .logos-frame {
            overflow: hidden;
            width: 80px;
          }
          @media (min-width: 460px) {
            .logos-frame {
              width: 100px;
            }
          }
          .logos-slider {
            display: flex;
          }
          
          .logos-wrapper {
            width: 80px;
            padding: 0 10px;
            flex-shrink: 0;
          }
          @media (min-width: 460px) {
            .logos-wrapper {
              width: 100px;
            }
          }
      
      `}</style>
      </div>
    )
  }
}
