const mainFoodData = [
  {
    id: "1",
    image:
      "https://s3-alpha-sig.figma.com/img/ed83/52fa/3ed241dd96943f230377562055db315b?Expires=1618185600&Signature=JBt8Qnjo-WACu33nTiRrw1T~m1oONgR7Hqbi44hnAwZwWRm36K2l0cWQ0scMmGJEqcv47m2FJOlEnStNHA9q2nnn9SoiFFlBZUuBOPn0S4FrtIGDqlwJdNAmmQ5V5M7X7jQoPiQaMWlsa00z1l21Atd~L3JANUzGsCVEgeGmIA17lYYHlb0RrC7XDrF~EbJ3x9vx4h63Y3MQ~upC5RY4XT1Dz3b-1jVB3d8lHP6dOwng9~nIzi8l4j4LPr7a0PjlFqRkem-iT2LY6NMcglIFsSMiwqWFzxpZzLJj7yloqFH8kI65i88daU-JOA~O2tI7HKhLZRSkwvJpxmMqdUvfdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm cá riêu hồng chiên",
    price: "27.000",
    isSale: true,
    salePrice: "30.000",
    number: 15,
  },
  {
    id: "2",
    image:
      "https://s3-alpha-sig.figma.com/img/e899/d3d5/a262bec05c8f4f34024bb742593764f9?Expires=1618185600&Signature=ecH4s5oUyvIVdWbmRWof3oSLxlKFtZuwr171cU8S82FEbC3jvRz9RP~KDDJdSrCO7CxE10TwNDBmIBA72W98820VgbepMdmnokdqObiYpNl-yAkqZ99iaRGAiig7E8~c0WmiiCn63kiUIXRFsdHT67xAA6AOAB9SqQrQJ1Loci0uBz5YQoRaKrNAYWGbodUvw3gE6~FJnZdchdVB8PIg3qIspVXC7S2IGZ9~8h9YqfF7rqCMpbKjaYwV3gk3gbEjp2Tp7Yvd5ZpDLH9c2EirjmNzvT~cdZj5u9aUj9rMDcNa5pUfED0V3tg1hbZw-0CYVngLZO3m62QjLiJsaerPgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm chả trứng ",
    price: "30.000",
    isSale: false,
    salePrice: "",
    number: 0,
  },
  {
    id: "3",
    image:
      "https://s3-alpha-sig.figma.com/img/a81e/ae2e/2c7710ae00d9b18f58c7e0c940896d73?Expires=1618185600&Signature=En16aO8Jew5GAsY5z1~097nlJQxkiZijMwjPhguDmZetEel9P4xXd5PHaOhpnZoLLTKiYVRzEoExsSDLNRW1g2zp7pzAZ7RX08NWdr32ofbQGPC87aC89Ul-ZyI8TvgT4I4A5F5BzA3eFEbvXCb~VjSg47ERtBftvMIUFh4Z172VPTmuMy0gNUOboYfEJ2yJc-Z7yY9Eaec2NC5BWTy0l~kX1kSTM1agNu2WRvg2yTs93MwslgTFt6A4afg0AccN7rMfi~iUK0F49bepRKO89ERYPrL-49S92LzcC5MG7rAMYFl~rjwSvRaTvIhyavx~IX9f8u1nXHq0WDdmbMSqgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm chả trứng ",
    price: "30.000",
    isSale: false,
    salePrice: "",
    number: 0,
  },
  {
    id: "4",
    image:
      "https://s3-alpha-sig.figma.com/img/a9e9/b86b/02df73d3ec78cba06b5f04dff31c6801?Expires=1618185600&Signature=RcaJF9oN8Begb8MLYcL59qfvFkb~RbLNg-t25bri5SjJeIwW0xNrFy6CQ1PC3TCu9Arl5O5G6P7GvTLro-e484tDRrdNk9nH8dj0rAjMGY-xMriBM2h1xEP4~3sKYYcyPnOVM1kNwAcBeC-2M33At9S7Lzo9j928kFbf9oQ0WBiZwXlikFdEjJT3qz36UoUjAFgwSzVEoXVElAKgGDYw1obtjykvOo-SSpNQSXSoh6NRRq6Q63Vi6kJCPq7CeCaaG12P9KFVVCdIBqt7TLbj9JeQP~n0DkHKLivlrFl4xUjszVHcwp4PHvUBIipffZkX6MwCiHiq3AVu8mCv1QG~gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm chả trứng ",
    price: "30.000",
    isSale: false,
    salePrice: "",
    number: 9,
  },
  {
    id: "5",
    image:
      "https://s3-alpha-sig.figma.com/img/4ec5/a9a4/95c8d314d71dde20f7720b7a47e997ad?Expires=1618185600&Signature=XUS-LgQL2lC8IlKN5GNHaMbaIykQZobFBh56SVOIEOFLiHVK6NxUugdwE0Vi7qPUls7wrzHdAtxXX6R81kXM11zQeVjBwMCiUzXUie6LO3qjxcQ0etg8Z2jzdwevvSxHoRTM3db~BGRAKFxbtK6ztGWwKbCcWxx79zVUiWPtdcREf44VhdAiAjALCwX0fAVTIRC-Rfd~FdHNrdeBT6h9ZSTe4o8xdpkbPSgXIJvVNgq9eYgFEZ30F562WJM4vmlViIM1yT8NhbkBVfbV30swUhmAyhsbIG6qqe-YhU6eJvWVDzcvGmcTUvdvAyyUosleRLvw7DLyhz9vvRE21W5tOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm chả trứng ",
    price: "30.000",
    isSale: false,
    salePrice: "",
    number: 15,
  },
  {
    id: "6",
    image:
      "https://s3-alpha-sig.figma.com/img/8df6/6b95/93515c3039360095ce217f12f7d99261?Expires=1618185600&Signature=JrnzQvuuYDJZIb5~AsBwG0gv9YCWPcDtDQmA86s2opHQpeY~issCEDLHN2Qd4Edz6lVlPz12lg5sAaENjtF5~w2cFntyhBzImRw-wqrcV3gg7HfHWGRCAs9xYakXKNSuWbRpcFO7h2J-POa8VkdRzhlAWcIqkFitnZBBLngHOHWho8IXt1kWMsuxqw5abwgABl2csFM8FegEQYFGQxPLca7OfFVsH8R43~jqHP04V-htcWiH-dBVQ6LnOMt-Acuos6VObvjLBADVVNobAv8IowOiMUNPF4JBYYusy-3lSBTwyDzZFesq2yAwG3cjyT9X1Jmhzd5kBavnKEQpIY-VIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    foodName: "Cơm chả trứng ",
    price: "30.000",
    isSale: false,
    salePrice: "",
    number: 0,
  },
];
export default mainFoodData;
