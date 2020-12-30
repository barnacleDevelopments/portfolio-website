/* 
Author: Devin Davis
Date: December 5th, 2020
File: SkillContainer.js
*/

interface addon {
    link: string, 
    name: string
}

export default class SkillContainer {
    name: string
    desc: string
    addonType: string
    addons: addon[]

    constructor(
        name: string,
        desc: string,
        addonType: string,
        addons: addon[]
    ) {
        this.name = name;
        this.desc = desc;
        this.addons = addons;
        this.addonType = addonType;
    }

    create() {
        // create primary elements
        let element = document.createElement("article");
        element.classList.add("text");
        let heading1 = document.createElement("h2")
        heading1.textContent = this.name;
        let description = document.createElement("p")
        description.textContent = this.desc;
        element.append(heading1, description);
        if(this.addonType && this.addons) {
           element = this.addAddons(element)
        }
        return element
    }

    addAddons(element: HTMLElement) {
        let addonContainer = document.createElement("aside");

        let heading2 = document.createElement("h3")
        heading2.textContent = this.addonType;
        let addons = document.createElement("ul");
        // append each addon to addon list
        this.addons.forEach(a => {
            let addon = document.createElement("li");
            let anchor = document.createElement("a");
            anchor.target = "_blanc"
            anchor.href = a.link;
            anchor.textContent = a.name;
            addon.append(anchor);
            addons.append(addon);
        });
        addonContainer.append(addons)
        element.append(heading2, addonContainer)
        return element
    }
}