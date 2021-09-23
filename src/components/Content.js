import React from "react"
import "../assets/css/content.css"
import mgg2 from "../assets/images/mgg2.jpg"
import mgg3 from "../assets/images/mgg3.jpg"
import mgg4 from "../assets/images/mgg4.jpg"
const Content = ({ isOpen, toggleSidebar }) => {
    return (
      <div>
        {/* Home */}
        <section className="intro" id="home">
        <div className="inner">
          <div className="content1">
            <a href="#contact" className="btn">Contact Us</a>
          </div>
        </div>
      </section>
        {/* Aboutus */}
        <h2 id="about">About us</h2>
        <div className="l-center">
        <div className="l-container">
          <div className="l-grid">
            <div>
              <div className="l-max o-aspect-ratio" data-padding={80}>
                <div className="o-overlap-bottom">
                  <div className="o-aspect-ratio" data-padding={66}>
                    <img className="o-aspect-ratio__media" src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Misty shroud over a forest" />
                  </div>
                  <div className="o-overlap-bottom__deco" />
                </div>
                <div className="o-overlap-top">
                  <div className="o-aspect-ratio" data-padding={66}>
                    <img className="o-aspect-ratio__media" src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Plant in vase of water" />
                  </div>
                  <div className="o-overlap-top__deco o-aspect-ratio" />
                </div>
              </div>
            </div>
            <div>
              <p className="p12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia repellendus libero sunt earum laborum eos quas ad modi pariatur, eveniet vitae minus unde accusamus officiis voluptates, voluptatem, molestiae corrupti architecto exercitationem dolores quae commodi suscipit. Architecto blanditiis ad consequatur non?</p>
            </div>
          </div>
        </div>
      </div>
        <div>
        <h2 id="tours">Tours</h2>
        <div className="container1">
          <div className="card1"> 
            <div className="card-image">
              <img src={mgg2} alt="" />
            </div>
            <div className="card-content">
              <div className="blog-details">
              </div>
              <h2 className="blog title">Death valley Guided-Tour</h2>
              <p className="excerpt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt unde voluptatum maiores natus consectetur cupiditate debitis eum doloremque nobis inventore, nam assumenda sit eius dolore sed adipisci corporis atque ullam deserunt consequuntur. Adipisci deleniti, dolorem dolores recusandae nemo doloribus ducimus nihil, perferendis ullam officiis repudiandae eaque illum eius culpa laboriosam corrupti! Quisquam provident, consectetur neque quos iusto tenetur ducimus saepe vel odio nihil officiis delectus repellendus ab ipsam fugit necessitatibus maxime ipsa. Beatae laudantium ullam asperiores earum tenetur corporis illo voluptatibus amet enim repudiandae ratione incidunt, quo aperiam optio ducimus facere velit mollitia eveniet possimus, modi eum. Tenetur itaque tempora quod. Odit, exercitationem. Nihil tempore cupiditate id expedita adipisci optio consectetur at in vitae voluptatum, sapiente possimus doloribus ducimus, corrupti tenetur nesciunt? Recusandae officiis aliquam nesciunt eligendi possimus quaerat natus voluptatum, expedita repellat cupiditate molestias aut, quam doloremque! Ea incidunt cum corrupti quo temporibus totam consequatur eaque sequi facere?
              </p>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="card1"> 
            <div className="card-image">
              <img src={mgg3} alt="" />
            </div>
            <div className="card-content">
              <div className="blog-details">
              </div>
              <h2 className="blog title">Death valley Guided-Tour</h2>
              <p className="excerpt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt unde voluptatum maiores natus consectetur cupiditate debitis eum doloremque nobis inventore, nam assumenda sit eius dolore sed adipisci corporis atque ullam deserunt consequuntur. Adipisci deleniti, dolorem dolores recusandae nemo doloribus ducimus nihil, perferendis ullam officiis repudiandae eaque illum eius culpa laboriosam corrupti! Quisquam provident, consectetur neque quos iusto tenetur ducimus saepe vel odio nihil officiis delectus repellendus ab ipsam fugit necessitatibus maxime ipsa. Beatae laudantium ullam asperiores earum tenetur corporis illo voluptatibus amet enim repudiandae ratione incidunt, quo aperiam optio ducimus facere velit mollitia eveniet possimus, modi eum. Tenetur itaque tempora quod. Odit, exercitationem. Nihil tempore cupiditate id expedita adipisci optio consectetur at in vitae voluptatum, sapiente possimus doloribus ducimus, corrupti tenetur nesciunt? Recusandae officiis aliquam nesciunt eligendi possimus quaerat natus voluptatum, expedita repellat cupiditate molestias aut, quam doloremque! Ea incidunt cum corrupti quo temporibus totam consequatur eaque sequi facere?
              </p>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="card1"> 
            <div className="card-image">
              <img src={mgg4} alt="" />
            </div>
            <div className="card-content">
              <div className="blog-details">
              </div>
              <h2 className="blog title">Death valley Guided-Tour</h2>
              <p className="excerpt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt unde voluptatum maiores natus consectetur cupiditate debitis eum doloremque nobis inventore, nam assumenda sit eius dolore sed adipisci corporis atque ullam deserunt consequuntur. Adipisci deleniti, dolorem dolores recusandae nemo doloribus ducimus nihil, perferendis ullam officiis repudiandae eaque illum eius culpa laboriosam corrupti! Quisquam provident, consectetur neque quos iusto tenetur ducimus saepe vel odio nihil officiis delectus repellendus ab ipsam fugit necessitatibus maxime ipsa. Beatae laudantium ullam asperiores earum tenetur corporis illo voluptatibus amet enim repudiandae ratione incidunt, quo aperiam optio ducimus facere velit mollitia eveniet possimus, modi eum. Tenetur itaque tempora quod. Odit, exercitationem. Nihil tempore cupiditate id expedita adipisci optio consectetur at in vitae voluptatum, sapiente possimus doloribus ducimus, corrupti tenetur nesciunt? Recusandae officiis aliquam nesciunt eligendi possimus quaerat natus voluptatum, expedita repellat cupiditate molestias aut, quam doloremque! Ea incidunt cum corrupti quo temporibus totam consequatur eaque sequi facere?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="heading-section"> 
            <h2>BLOG</h2>
          </div>
          <div className="content-section" id="blog">
            <div className="card">
              <img src={mgg2} alt="" />
              <h4>DEATH VALLEY - GUIDED TOUR
              </h4>
              <p>
                Experience America’s Most Arresting Vista Ana	Experience America's Most Arresting Vista Ana The ParK s Lesser-Known Bacxcountry On A To Its	The Para’s Lesser-Known BacKcountry On A To Its foot At Tne Colorado River On Th is 5-Day,	Foot At Tne Colorado River On Th is 5- Day,
                All-Incl usive, Overlana Aaventu re.
              </p>
            </div>
            <div className="card">
              <img src={mgg3} alt="" />
              <h4>DEATH VALEY - GUIDED TOUR
              </h4>
              <p>
                Experience America’s Most Arresting Vista Ana	Experience America's Most Arresting Vista Ana The ParK s Lesser-Known Bacxcountry On A To Its	The Para’s Lesser-Known BacKcountry On A To Its foot At Tne Colorado River On Th is 5-Day,	Foot At Tne Colorado River On Th is 5- Day,
                All-Incl usive, Overlana Aaventu re.
              </p>
            </div>
            <div className="card">
              <img src={mgg4} alt="" />
              <h4>DEATH VALLEY - GUIDED TOUR
              </h4>
              <p>
                Experience America’s Most Arresting Vista Ana	Experience America's Most Arresting Vista Ana The ParK s Lesser-Known Bacxcountry On A To Its	The Para’s Lesser-Known BacKcountry On A To Its foot At Tne Colorado River On Th is 5-Day,	Foot At Tne Colorado River On Th is 5- Day,
                All-Incl usive, Overlana Aaventu re.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <form action="#">
            <div className="group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="group">
              <textarea name id cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
            </div>
            <div className="conctact-btn">
               <a href="#" className="btn1 cyan">Send Message</a>
            </div>
          </form>
        </section>
      </div>
      <div className="gallery-section">
        <div className="inner-width">
          <h2>Follow Us on Instagram</h2>
          <div className="gallery">
            <a href="#" className="image">
              <img src={mgg2} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg3} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg4} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg3} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg2} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg4} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg3} alt="" />
            </a>
            <a href="#" className="image">
              <img src={mgg4} alt="" />
            </a>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Content