import React from 'react';

function Section({title, children}) { //title это prop я сам решаю как назвать
    return (
        <section>
           {title &&  <h2>{title}</h2>}  
            {children}
        </section>
    )
}
//читаеться так: если title не null, underfiend или false то рендериться <h2>{title}</h2>

Section.defaultProp = {  //если title не обьязательный то нужно прописать дефолтПроп
title: '', // пустая строка передает false и не рендериться 
}

// если есть не обьязательный prop то ему нужно обьязательно дать дефолтное значение

// Section.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.node.isRequired,
// }

export default Section;