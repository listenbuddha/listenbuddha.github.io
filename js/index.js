var ShoppingCart = (function ($) {
  "use strict";

  var productsEl = document.querySelector(".products");

  var products = [
    {
      id: 17,
      imageSrc: "img/n6.jpg",
      name: "ອິທັປປັຈຈະຍະຕາ ແລະ ປະຕິຈຈະສະມຸປບາທ",
      link: "https://www.facebook.com/listenBuddhist/posts/pfbid02nAZxc4Cdo3imTVbGoK6qTtZoghYoFrneySxRngzxLrzvsqbpCNb7R8kVdQZUYinCl",
      discription: "ອິທັປປັຈຈະຍະຕາ ແລະ ປະຕິຈຈະສະມຸປບາທ ແປລາວ ປັນຈະເວຣະພະຍະສູຕຣ. 13/57/41.",
      type: ""


    },
    {
      id: 16,
      imageSrc: "img/n3.jpg",
      name: "ສຽງອ່ານ ອິທັປປັຈຈະຍະຕາ ແລະ ປະຕິຈຈະສະມຸປບາທ",
      link: "mp3/01.mp3",
      discription: "ສຽງອ່ານ ອິທັປປັຈຈະຍະຕາ ແລະ ປະຕິຈຈະສະມຸປບາທ ຈາກ ໄວລຸ້ນຟັງທັມ",
      type: "audio/mpeg"

    },
    {
      id: 15,
      imageSrc: "img/n4.jpg",
      name: "ສຽງອ່ານ ອະຣິຍະສັຈ 4 (ວ່າດ້ວຍຄວາມຈິງອັນປະເສີຖ 4)",
      link: "mp3/02.mp3",
      discription: "ສຽງອ່ານ ອະຣິຍະສັຈ 4 (ວ່າດ້ວຍຄວາມຈິງອັນປະເສີຖ 4) ຈາກ ໄວລຸ້ນຟັງທັມ",
      type: "audio/mpeg"

    },
    {
      id: 14,
      imageSrc: "img/n5.jpg",
      name: "ສຽງອ່ານ ການຕອບແທນບຸນຄຸນ ມານດາ ບິດາ ຢ່າງສູງສຸດ",
      link: "mp3/03.mp3",
      discription: "ສຽງອ່ານ ການຕອບແທນບຸນຄຸນ ມານດາ ບິດາ ຢ່າງສູງສຸດ ຈາກ ໄວລຸ້ນຟັງທັມ",
      type: "audio/mpeg"

    },
    {
      id: 12,
      imageSrc: "img/n1.jpg",
      name: "ພຸດທະປະວັດ ຈາກພຣະໂອຖະ",
      link: "pdf/12.pdf",
      discription: "ພຸດທະທາສພິກຂຸ ແປ ແລະ ລວບລວມຈາກພຣະໄຕຣປິດົກພາສາບາລີ",
      type: "application/pdf"

    },
    {
      id: 13,
      imageSrc: "img/n2.jpg",
      name: "ອະຣິຍະສັຈ ຈາກພຣະໂອຖະ ພາກປາຍ",
      link: "pdf/13.pdf",
      discription: "ຄະນະຜູ້ແປແລະກວດແກ້ເປັນພາສາລາວວັດປ່າວິໂມກຊໍາປັກແຮດ",
      type: "application/pdf"

    },
    {
      id: 0,
      imageSrc: "img/0.jpg",
      name: "ຄວາມກະຕັນຍູກະຕະເວທີ",
      link: "pdf/0.pdf",
      discription: "ຜູ້ອອກແບບ ແລະ ຮຽບຮຽງ ໂດຍ: ພຣະອາຈາຣຍ໌ ວ. ວົງແສງສີ",
      type: "application/pdf"

    },
    {
      id: 1,
      imageSrc: "img/1.jpg",
      name: "ຄະຣາວາສຊັ້ນເລີດ",
      link: "pdf/1.pdf",
      discription: "ໜັງສືຈາກພຸດທະພົຈນ໌ ຄະຣາວາສຊັ້ນເລີດ",
      type: "application/pdf"


    },
    {
      id: 2,
      imageSrc: "img/2.jpg",
      name: "ຄູ່ມືການຈະເຣີນເມຕຕາ",
      link: "pdf/2.pdf",
      discription: "ຜູ້ອອກແບບ ແລະ ຮຽບຮຽງ ໂດຍ: ພຣະອາຈາຣຍ໌ ວ. ວົງແສງສີ",
      type: "application/pdf"


    },
    {
      id: 3,
      imageSrc: "img/3.jpg",
      name: "ຄູ່ມືໂສດາບັນ",
      link: "pdf/3.pdf",
      discription: "ພຸດທະວະຈະນະ ຄູ່ມືໂສດາບັນ",
      type: "application/pdf"


    },
    {
      id: 4,
      imageSrc: "img/4.jpg",
      name: "ສະຕິປັຕຖານ",
      link: "pdf/4.pdf",
      discription: "ຜູ້ອອກແບບ ແລະ ຮຽບຮຽງ ໂດຍ: ພຣະອາຈາຣຍ໌ ວ. ວົງແສງສີ",
      type: "application/pdf"


    },
    {
      id: 5,
      imageSrc: "img/5.jpg",
      name: "ສະຣະນະຂອງຊາວພຸທ",
      link: "pdf/5.pdf",
      discription: "ຜູ້ອອກແບບ ແລະ ຮຽບຮຽງ ໂດຍ: ພຣະອາຈາຣຍ໌ ວ. ວົງແສງສີ",
      type: "application/pdf"


    },
    {
      id: 6,
      imageSrc: "img/6.jpg",
      name: "ສາທະຍາຍທັມ",
      link: "pdf/6.pdf",
      discription: "ປຶ້ມຄູ່ມືສາທະຍາຍທັມ ຮິບໂຮມໂດຍ ພຣະອາຈາຣຍ໌ ພູມ ເດຊວົງສາ",
      type: "application/pdf"

    },
    {
      id: 7,
      imageSrc: "img/7.jpg",
      name: "ທານ",
      link: "pdf/7.pdf",
      discription: "ໜັງສືຈາກພຸດທະພົຈນ໌ ທານ",
      type: "application/pdf"


    },
    {
      id: 8,
      imageSrc: "img/8.jpg",
      name: "ປະຣິນຍາໃນອະຣິຍະວິນັຍ",
      link: "pdf/8.pdf",
      discription: "THE WORD OF THE BUDDHA ປະຣິນຍາໃນອະຣິຍະວິນັຍ",
      type: "application/pdf"

    },
    {
      id: 9,
      imageSrc: "img/9.jpg",
      name: "ພຸດທະວະຈະນະ(ໂດຍພາບລວມ)",
      link: "pdf/9.pdf",
      discription: "ພຸດທະວະຈະນະ(ໂດຍພາບລວມ) ພາສາລາວ",
      type: "application/pdf"

    },
    {
      id: 10,
      imageSrc: "img/10.jpg",
      name: "ອານາປານະສະຕິ",
      link: "pdf/10.pdf",
      discription: "ປຶ້ມຄຳສອນຈາກພຸດທະພົຈນ໌ ອານາປານະສະຕິ",
      type: "application/pdf"

    },
    {
      id: 11,
      imageSrc: "img/11.jpg",
      name: "ແກ້ກັມ",
      link: "pdf/11.pdf",
      discription: "ປຶ້ມຄຳສອນຈາກພຸດທະພົຈນ໌ ແກ້ກັມ",
      type: "application/pdf"
    },

  ];

  // Generate the product list
  var generateProductList = function () {
    products.forEach(function (item) {
      var productEl = document.createElement("div");
      productEl.className = "column";
      productEl.innerHTML = `
        <a href="${item.link}" onclick="buddha()">
          <img src="${item.imageSrc}" alt="${item.name}" style="float:left;">
          <div class="det">
            <p class="name">${item.name}</p>
          </a>
          <hr>
          <p class="line-clamp">${item.discription}</p>
        </div>
        <script>
          function buddha() {
            const buddha = window.open();
            buddha.document.write('<html><head><title>${item.name}</title></head> 
              <body><object data="${item.link}" type="${item.type}" width="100%" height="100%"> </object></body></html>');
          }
        </script>
      `;
      productsEl.appendChild(productEl);
    });
  };

  // Initialize the application
  var init = function () {
    generateProductList();
  };

  return {
    init: init,
  };
})(jQuery);

ShoppingCart.init();
