

const Links = () => {


    const items = [
        "Page d'accueil",
        "Prestations de service",
        "Portfolio",
        "Contact",
        "À propos de",
        
    ]

    return (
    <div className="links">
       {items.map((item) => (
         <a href={`#${item}`} 
           key={item}>
            {item}
            </a>
       ))}
    </div>
  );
}

export default Links;