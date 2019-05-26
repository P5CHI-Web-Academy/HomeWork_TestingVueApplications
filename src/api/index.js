const remoteData = [
  {
    title: 'Bay Leaf',
    shortDescription: 'Adds a woodsy background note to soups and sauces.',
    description: 'Bay leaves come from the bay laurel tree, native to the Mediterranian regions, while California bay leaves come from a different type of tree and have a stronger, more astringent flavor. The leaves of either plant are generally 1-3 inches long, almond-shaped, and glossy green. Bay leaves are almost always dried and are actually at their best flavor a few weeks after drying. Fresh leaves are sometimes available, though their flavor is much more mild than dried.\n\nThe leaf itself doesn’t taste like much other than, well, a leaf. But steep a few leaves in a warm broth or sauce, and your dish becomes infused with fragrant flavor. It’s not usually a very forward seasoning, but its woodsy flavor and slight bitterness helps to balance the flavors in a dish.\n\nThe best place to store dried bay leaves isn’t actually in your spice cabinet, but in the freezer. When stored in the freezer, the leaves keep their potent flavor and aroma for a longer period of time.',
    tags: {
      taste: [
        'Sweet',
        'bitter'
      ],
      most_popular_use: [
        'Soups',
        'stews',
        'sauces'
      ]
    },
    isAvailable: true,
    orderId: 1,
    img: 'data:image/jpeg;base64,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'
  },
  {
    title: 'Cayenne Pepper',
    shortDescription: 'Made from dried and ground red chili peppers. Adds a sweet heat to soups, braises, and spice mixes.',
    description: 'Cayenne is a type of red chili pepper originally from French Guiana, but that spread to other parts of the world during the 15th and 16th centuries. It’s a fairly hot pepper, and has a mid-range Scoville Rating of 30,000 – 50,000. While we typically use it in powdered form, you can also find and cook with cayennes that are fresh, dried, or even made into oil.\n\nCayenne pepper has also received a lot of attention for its health benefits, and in fact it was used as a medicine before it was really considered a culinary seasoning. A diet with regular amounts of cayenne is said to have a positive affect on both the digestive and circulatory systems.',
    tags: {
      taste: ['Spicy'],
      most_popular_use: ['Spice blends', 'meat', 'fish', 'vegetables', 'sauces']
    },
    isAvailable: false,
    orderId: 2,
    img: 'https://i.dlpng.com/static/png/1826895_thumb.png'
  },
  {
    title: 'Cinnamon',
    shortDescription: 'Found in almost every world cuisine, cinnamon serves double duty as spice in both sweet and savory dishes.',
    description: 'True cinnamon comes from the inner bark of a tropical tree related to the bay laurel. As the bark dries, it curls on itself into distinctive slender sticks, or “quills.” Cinnamon is distinguished as Ceylon (or tree cinnamon), lightly-colored with a mild, sweet flavor, or cassia cinnamon, which bears a darker reddish-brown color and more pungent aroma. When purchasing or using a spice simply labeled as cinnamon, this is typically the cassia variety.\n\nAs with most spices, whole cinnamon sticks will keep longer and have better flavor than ground cinnamon spice. Store whole and ground cinnamon in air tight container in a cool, dry, dark location.',
    tags: {
      taste: ['Sweet', 'warm', 'bitter'],
      most_popular_use: ['Baked goods', 'spice blends']
    },
    isAvailable: true,
    orderId: 3,
    img: 'http://static1.squarespace.com/static/565dd6b6e4b0acf4dfab6b07/583f081db8a79b320472fe6b/59ea82892278e7bde3eb4b64/1508541068129/Cinnamon.png'
  },
  {
    title: 'Cumin',
    shortDescription: 'Smoky and earthy. Used in a lot of Southwestern U.S. and Mexican cuisine, as well as North African, Middle Eastern, and Indian.',
    description: 'Here in the United States, we most often associate the flavor of cumin with southwestern and Mexican cooking. This spice is actually native to southwest Asia and made its way into cuisines around the world through the spice trade. It’s a hallmark in North African, Indian, and Middle Eastern cooking.\n\nWith a similar appearance to caraway seeds, cumin is the dried fruit of a plant in the parsley family. Cumin has a nutty, smoky flavor that works well in combination with other spices like chilis, cinnamon, and coriander. The dried seeds are tiny and oblong, and the spice is a light orange-brown when ground. It can be purchased and used whole or ground, and it best stored in an airtight container in a cool, dry, and dark location for up to six months.',
    tags: {
      taste: ['Bitter', 'sweet'],
      most_popular_use: ['Curries', 'spice blends', 'stews']
    },
    isAvailable: true,
    orderId: 4,
    img: 'https://5.imimg.com/data5/MG/HO/MY-5854474/cumin-seed-powder-500x500.png'
  },
  {
    title: 'Garlic Powder',
    shortDescription: 'Garlic powder is made from dehydrated garlic cloves and can be used to give dishes a sweeter, softer garlic flavor.',
    description: '\nGarlic powder is made from garlic cloves that have been dehydrated and ground into fine particles. The flavor is garlicky but vastly different than fresh-chopped garlic. It tastes sweeter and much less assertive than fresh garlic, but also without the caramelly undertones that you get from roasted or sautéd garlic.',
    tags: {
      taste: ['Savory', 'sweet'],
      most_popular_use: ['Spice blends', 'meat', 'vegetables']
    },
    isAvailable: true,
    orderId: 5,
    img: 'https://radiancewholefoods.com/image/cache/catalog/Garlic%20powder-500x500.png'
  },
  {
    title: 'Loomi',
    shortDescription: 'Also called black lime, this is ground from dried limes. Adds a sour kick to many Middle Eastern dishes.',
    description: 'In their pre-ground state, loomi, also known as black limes, look like fresh limes that were left to sit around in a fruit bowl and forgotten about. The actual process of making them isn’t too far off. Fresh limes are boiled in salt water and then left to sun dry. The final product appears shrunken, deflated, and vary in color from tan to very dark brown.\n\nThey have a highly aromatic, somewhat fermented flavor, and can be used whole (usually pierced or crushed) or in powdered form.\n\nLook for loomi in the spice aisle at Middle Eastern markets, and keep it stored in an airtight container away from heat and light.\n\n',
    tags: {
      taste: ['Sour'],
      most_popular_use: ['Chicken', 'fish', 'spice blends']
    },
    isAvailable: false,
    orderId: 6,
    img: 'https://www.eekkon.com/wp-content/uploads/2018/04/loomi-800x800.png'
  },
  {
    title: 'Mahlab',
    shortDescription: 'Ground from sour cherry pits, this spice has a nutty and somewhat sour flavor. It’s used in a lot of sweet breads throughout the Middle East.',
    description: 'Mahleb seeds are extracted from the cracked cherry pits and then dried before being sold as a spice. The kernels are tan-colored and quite small, only about 1/4 inch or so across. The whole spice can be easily ground in a grinder, or using a mortar and pestle.',
    tags: {
      taste: ['Bitter', 'sweet'],
      most_popular_use: ['Baked goods']
    },
    isAvailable: true,
    orderId: 7,
    img: 'https://cdn.shopify.com/s/files/1/0522/6301/products/9KJToHOOjQ7fEpmQgmJUjYj9ZGsjFrA7POH6NcrYjcw_w518-h392-p-no_large.png?v=1438667921'
  }
]

export function fetchItems () {
  return Promise.resolve(remoteData)
}

export function fetchItemById (id) {
  return Promise.resolve(remoteData.find(item => item.orderId === id))
}
