function scrollToElement(elementSelector, instance = 0) {
    // Stocker tous les éléments dans une variable
    const elements = document.querySelectorAll(elementSelector);
    // Vérifier si des éléments correspondent au sélecteur et si l'instance demandée existe
    if (elements.length > instance) {
        // Faire défiler vers l'instance spécifiée de l'élément
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Instance ${instance} non trouvée pour le sélecteur "${elementSelector}".`);
    }
}

// Stocker les éléments de lien dans un tableau pour itération
const links = [
    { element: document.getElementById("link1"), selector: '.header', instance: 0 },
    { element: document.getElementById("link2"), selector: '.header', instance: 1 },
    { element: document.getElementById("link3"), selector: '.column', instance: 0 }
];

// Boucle sur chaque lien pour ajouter un événement de clic
links.forEach(link => {
    link.element.addEventListener('click', () => {
        scrollToElement(link.selector, link.instance);
    });
});
