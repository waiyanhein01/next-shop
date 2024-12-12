const useCategoryStore = (set) => ({
  categories: [
    {
      id: 1,
      name: "Shirts",
      image:
        "https://s3-alpha-sig.figma.com/img/f1d7/74d0/6edefcbf44be23fd080d09dffeed831f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6SGweG7vV1CkQ-byqMcH2Zy2H6FhiDNDnrE9GyLLuRYSSP3EEnV5b2on93zCtUuZ5hdpLv1pz3M0UTCinWcpuXvMF8ImTnJ4PS~un6U1~B~93FwMG~rGZjMvJ2ffZFaDyNB2c6Degd2OQuEySXumAfoFgDaKDjiCZl-Bj3SRb8ZZ446OGk7aaUlaiOihHxCElRykqUu3bfzhOd9MA9Uq9Y6hUvschpLAo1BJrULfzFU1kB48sCqY8bixHbSdhTJjgeNYrZ4UaSG4NlK0s4enx-eLOqx4RZc-JgvBNaoIo8RUjRpa2LpV5PGy3ClzlzENCWxwzmhOKNLkDvEvjL1sA__",
    },
    {
      id: 2,
      name: "Sweatshirts",
      image:
        "https://s3-alpha-sig.figma.com/img/41da/aaea/5ace32aed75da4e34c57e5ae805e71e3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PtL9TGF~lOZdYpzrGkDkU63G9cxzsFAC2RVMk-unK9ZZS6yQB5cNCUawd~PD5A2aCvI-xKIbDVUtirFEwkfBL58USLBKRgkrR38Si7wyMwF~dwMEokUqU6Kdy-z59Xr1cOL7~jg0Dc65qZ~bzHwULZiblZGjV7Qp2si~bXE2g2B13mDzrb~IjulsOByd8pVg2JQNNvjVcqd1rV4FUZsyqumYcs0YH~nzAyGmtB7Zm4GHJxbgVN36z0Ug-AQRw9-Jr6xvCRXL4FRUxwkjlafDW95Czw-7mL07Bjd-h-O0qQ5ud4MTAXxPiTmNtxRPIxIeXmN~jVImbLzlheOtEz1sOw__",
    },
    {
      id: 3,
      name: "Hoodies",
      image:
        "https://s3-alpha-sig.figma.com/img/1d3e/51c7/0cb3411cd2d7241d491e501c8ab31231?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UlW8KTv-bIWfGfOfPos4XJgAzEu3skxKUqDkNtoVWGozdIIPcqs5Fm2VRDUSbkRUMAHsNeO6dq6ZCuEZBxJo84cnuasoMZOpBR4OXMxE2X6X~bWTv1cJnu905-sY44UdDRzE3LQA2fYr0DO1KfU6QDJJ~pivuzU55HAr3iZKOBKkJ3lwqE7RkNOe7vZLe3ysMoe7rNZw4cTkirjydPJ0vX8ptXpQzxnTk7kbEW9Ui5byZe3VrRhZjUi7Vf0gz2wwnp5yF4jkY1C716Mgs09dJmMD4trAkFL63jxSKUvi36yC4-BT0vi52kdNt6haqmzm8db-AD-zqgNTJU07xz--Gg__",
    },
    {
      id: 4,
      name: "Jackets",
      image:
        "https://s3-alpha-sig.figma.com/img/911b/0fce/3e0a70222995e4b5486154757daa3c46?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzT6Lc0lEeGiHx2grfvOhd4EPE8UsomzC50qaUTN~EgvhZLsg5XW61223wwKq8YGls0PrKorwo33cJW1wEofonByaxPb3k1hUMV5AjpZ0gTdG9bx2JLTwjFL4JDZvKZz~yf4BYKBp2t-J8K2PLbFCobLvKB0Y5zr5jwoPQAmBicA064Bxzdeypa9mqhRWVLb3nO2DSPV--q8Kw7gGfaUzpT32D~j1ytpz5uyVr2Yuu9fnO~qKpteM4x7XwlcBMSFHvLt5aWckUECfsS04HP-4YhRFuRZdJgEF-2gEG5dCtcJ94erSgyOop45pF2iNUavftEhDbdIDKWWHiGsNbfWMw__",
    },
    {
      id: 5,
      name: "Bags",
      image:
        "https://s3-alpha-sig.figma.com/img/bd02/c96d/8184ae80e2852d2e134e50271cd53c02?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGYJe8ubTiu40kXcGjPZTttDy8ygkwT8qiEkQHDBGWg2GXzhFWvLapb8jqPX2zdZrCz9Y9L0hib961SxgIwDOJ1AjMSh6TSR7HCyCIDxHhtj1G0asnvJ0rS9r0JnskSzHFM9FL4oJlgeUHZPLQ2aibJNpyFsm5rBF~~J1KMqs~B6I72GJ83LYdfQCYJNeOv-BDoGl3twJEeZXEXNT3UKB92jUmjhal8dUjEmseuewigtQ6YFgsg1etI6KU4ANteksp2cZU4QYTb3MxkBPW7G~o5G5gVjJgPQjk-OLG0IIJfdm9wY5v1pYErOcu65I~pm76U34QnKyxg3cv~t2btorw__",
    },
  ],
});

export default useCategoryStore;
