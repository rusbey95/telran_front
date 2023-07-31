import React from 'react'

function Paragraph() {
    function pToConsole(e) {
        console.log(`Text paragraph ${e.target.textContent}`);
    }
    return (
        <div onClick={pToConsole}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem numquam doloremque nesciunt ea, suscipit quisquam aliquam accusamus ex repellat velit vero optio amet. Ipsa, odit vitae! Quam dicta porro voluptate.</p>
            <p>Lorem ipsuscipit quisquam aliquam accusamus ex repellat velit vero optio amet. Ipsa, odit vitae! Quam dicta porro voluptate.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem numquam doloremque nesciunt ea, suscipit quisquam aliquam accusamus ex repellat velit vero optio amet. Ipsa, odit vitae! Quam dicta porro voluptate.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem numquam doloremque nesciunt ea, suscipit quisquam aliquam accusamus ex repellat velit vero optio amet. Ipsa, odit vitae! Quam dicta porro voluptate.!!!!!!</p>
        </div>
    )
}

export default Paragraph;