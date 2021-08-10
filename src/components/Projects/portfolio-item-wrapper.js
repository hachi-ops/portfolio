import React from "react";
import './projects.css';


const PortfolioItemWrapper = (props) => {
    function clickHandler() {

    }
    return (
<div className="portfolio-item-wrapper">

<div className="portfolio-img-background">
</div>

<div className="img-text-wrapper">
    <div className="logo-wrapper">
        <div className="subtitle">Some text</div>
</div>

<div className="portfolio-item-text">
    <h4><b>{ props.text }</b></h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatem id similique, cum illum cupiditate nostrum tenetur perspiciatis commodi necessitatibus odio labore delectus nihil, adipisci architecto repudiandae quod. Cupiditate, facere.</p>
    <div>
        <button onClick ={clickHandler}>Source code</button>
    </div>
    <div>
        <button>View</button>
    </div>
  </div>
</div>
</div>
    );
}

// const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

//     portfolioItems.forEach(x => {
//         x.addEventListener('mouseover', () => {

//             x.childNodes[1].classList.add('img-darken');
//         })

//         x.addEventListener('mouseout', () => {

//             x.childNodes[1].classList.remove('img-darken');
//         })
//     })
export default PortfolioItemWrapper;