

const Accordion = () => {


  const handleToggle = (event) => {
    const btn = event.target;
    const content = btn.nextElementSibling;
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  }

  return (
      <div className= "accordion" id="accordion">
        <div className="accordion-item">
          <div className="accordion-header" aria-expanded="true">
            <button className="accordion-title" onClick={handleToggle} >Section 1</button>
            <p className="accordion-content" >Content for section 1.</p>
            </div>
          </div>
          <div className="accordion-item">
          <div className="accordion-header" aria-expanded="false">
            <button className="accordion-title" onClick={handleToggle}>Section 2</button>
            <p className="accordion-content">Content for section 2.</p>
            </div>
          </div>
      </div>

    );
};

export default Accordion;