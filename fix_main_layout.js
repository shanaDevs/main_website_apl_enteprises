const fs = require('fs');
const path = require('path');

function replaceFileContents(filePath, rules) {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');
  for (let rule of rules) {
    if (typeof rule.find === 'string') {
        text = text.split(rule.find).join(rule.replace);
    } else {
        text = text.replace(rule.find, rule.replace);
    }
  }
  fs.writeFileSync(filePath, text, 'utf8');
}

const headerPaths = [
  path.join(__dirname, 'components', 'layout', 'header', 'Header1.js'),
  path.join(__dirname, 'components', 'layout', 'header', 'Header2.js'),
  path.join(__dirname, 'components', 'layout', 'header', 'Header3.js'),
  path.join(__dirname, 'components', 'layout', 'header', 'Header4.js'),
  path.join(__dirname, 'components', 'layout', 'header', 'Header5.js')
];

for (let header of headerPaths) {
  replaceFileContents(header, [
    { find: /Logistiq/g, replace: "APL Trading" },
    { find: /<img\s*src=["']\/assets\/images\/logo.*?.png["'].*?\/>/g, replace: "<h3 className='text-white mb-0'>APL Trading</h3>" },
    { find: /<li className="has-dropdown">\s*<Link href="\/#">Projects<\/Link>[\s\S]*?<\/ul>\s*<\/li>/, replace: "" },
    { find: /<li className="has-dropdown">\s*<Link href="\/#">Pages<\/Link>[\s\S]*?<\/ul>\s*<\/li>/, replace: "" },
    { find: /<li className="has-dropdown">\s*<Link href="\/#">Blog<\/Link>[\s\S]*?<\/ul>\s*<\/li>/, replace: "" },
    { find: /\+123 456 789/g, replace: "+94 11 200 4567" },
    { find: /support@logistra\.com/g, replace: "info@apltrading.lk" },
    { find: /Australia/g, replace: "Colombo, Sri Lanka" },
    { find: /<Link href="\/#"><i className="far fa-user"><\/i> Member Login<\/Link>/, replace: "" }
  ]);
}

const footerPaths = [
    path.join(__dirname, 'components', 'layout', 'footer', 'Footer1.js'),
    path.join(__dirname, 'components', 'layout', 'footer', 'Footer2.js')
]

for (let footer of footerPaths) {
  replaceFileContents(footer, [
    { find: /Logistiq/g, replace: "APL Trading" },
    { find: /<img\s*src=["']\/assets\/images\/logo.*?.png["'].*?\/>/g, replace: "<h3 className='text-white mb-0'>APL Trading</h3>" },
    { find: /\+123 456 789/g, replace: "+94 11 200 4567" },
    { find: /Australia/g, replace: "Colombo, Sri Lanka" },
    { find: /Logistic service provider company plays a pivotal role in the global economy by facilitating the movement of goods./g, replace: "Your trusted B2B sourcing partner. We simplify global supply chains and logistics between international manufacturers and Sri Lankan businesses." }
  ]);
}

// Fix Mobile Menu
const mobileMenu = path.join(__dirname, 'components', 'layout', 'MobileMenu.js');
replaceFileContents(mobileMenu, [
    { find: /Logistiq/g, replace: "APL Trading" },
    { find: /<img\s*src=["']\/assets\/images\/logo.*?.png["'].*?\/>/g, replace: "<h3 className='text-white mb-0'>APL Trading</h3>" },
    { find: /<li className={isActive\.key == [345] \? "has-dropdown active" : "has-dropdown"}>\s*<span className={isActive\.key == [345] \? "menu-open" : ""} onClick=\{.*?\}>.*?<\/span>[\s\S]*?<\/ul>\s*<\/li>/g, replace: "" }
]);


const aboutPath = path.join(__dirname, 'app', 'about', 'page.js');
replaceFileContents(aboutPath, [
    { find: /Logistiq/g, replace: "APL Trading" },
    { find: /Logistic service provider company plays a pivotal role in the global economy by facilitating the movement of goods from producers to consumers./g, replace: "APL Trading simplifies industrial importing, global sourcing, and logistics. Our B2B operations bridge the gap between quality international suppliers and eager regional buyers." }
]);

const contactPath = path.join(__dirname, 'app', 'contact', 'page.js');
replaceFileContents(contactPath, [
    { find: /Logistiq/g, replace: "APL Trading" },
    { find: /\+123 456 789/g, replace: "+94 11 200 4567" },
    { find: /support@logistra\.com/g, replace: "info@apltrading.lk" },
    { find: /Australia/g, replace: "Colombo, Sri Lanka" },
    { find: /At our firm, we are committed to guiding you through every step of your insurance journey./g, replace: "Our team is ready to assist you. Tell us about your bulk requirement and logistics needs." }
]);
console.log("Main Website Nav & Content Cleaned");
