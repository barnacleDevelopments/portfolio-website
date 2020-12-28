// /* 
// Author: Devin Davis
// Date: December 5th, 2020
// File: SkillContainer.js
// */

// export class SkillContainer {
//     name: string
//     desc: string
//     addons: []
//     addonName: string
//     color: string
//     constructor(name: string, desc: string, addonName: string, addons: [], color: string) {
//         this.name = name;
//         this.desc = desc;
//         this.addons = addons;
//         this.addonName = addonName;
//         this.color = color;
//     }

//     create() {
//         // create primary elements
//         let element: HTMLElement = document.createElement("article");
//         element.classList.add("text");
//         element.style.backgroundColor = this.color;
        
//         let heading1 = document.createElement("h2")
//         heading1.textContent = this.name;

//         let description = document.createElement("p")
//         description.textContent = this.desc;
//         element.append(heading1, description);
//         if(this.addonName && this.addons) {
//            element = this.addAddons(element)
//         }
//         return element
//     }

//     addAddons(element: HTMLElement) {
//         let addonContainer = document.createElement("aside");

//         let heading2 = document.createElement("h3")
//         heading2.textContent = this.addonName;
//         let addons = document.createElement("ul");
//         // append each addon to addon list
//         interface addon {
//             link: string,
//             name: string
//         }
//         this.addons.forEach((a: addon) => {
//             let addon = document.createElement("li");
//             let anchor = document.createElement("a");
//             anchor.target = "_blanc"
//             anchor.href = a.link;
//             anchor.textContent = a.name;
//             addon.append(anchor);
//             addons.append(addon);
//         });
//         addonContainer.append(addons)
//         element.append(heading2, addonContainer)
//         return element
//     }
// }




export default {}