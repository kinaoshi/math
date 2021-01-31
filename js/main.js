"use strict";
{
  let numran1 = document.getElementById("numran1");
  let numran2 = document.getElementById("numran2");
  const start = document.getElementById("start");
  const again = document.getElementById("again");
  let clicks = document.getElementById("clicks");
  let expl = document.querySelector(".expl");

  let countNumber = 0;

  function hid() {
    imag.classList.add("hidden");
    come.classList.remove("showup");
    nice.classList.remove("showdown");
    again.classList.add("hidden");
    ansnum1.textContent = "";
    ansnum2.textContent = "";
    ansnum3.textContent = "";
  }

  function pluss() {
    if (expl.textContent === "たし算・ひとけた") {
      let min1 = 1;
      let max1 = 9;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 1;
      let max2 = 9;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      numran1.textContent = num1;
      numran2.textContent = num2;

      hid();
    }
    if (expl.textContent === "たし算・ひだりはふたけた") {
      let min1 = 1;
      let max1 = 9;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 10;
      let max2 = 90;

      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      numran1.textContent = num1;
      numran2.textContent = num2;

      hid();
    }
    if (expl.textContent === "たし算・やさしいふたけた") {
      let min1 = 10;
      let max1 = 99;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
      const num10 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      const num2 = num10[Math.floor(Math.random() * num10.length)];
      numran1.textContent = num1;
      numran2.textContent = num2;
      hid();
    }
    if (expl.textContent === "たし算・ふたけた") {
      let min1 = 10;
      let max1 = 99;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 10;
      let max2 = 99;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      numran1.textContent = num1;
      numran2.textContent = num2;
      hid();
    }
  }

  function minuss() {
    if (expl.textContent === "ひき算・ひとけた") {
      let min1 = 1;
      let max1 = 9;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
      let min2 = 1;
      let max2 = 9;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
      numran1.textContent = num1;
      numran2.textContent = num2;
      hid();
      if (num1 > num2) {
        numran1.textContent = parseInt(num1);
        numran2.textContent = num2;
      } else if (num1 < num2) {
        numran1.textContent = num2;
        numran2.textContent = num1;
      } else if (num1 === num2) {
        numran1.textContent = parseInt(num1) + 1;
        numran2.textContent = num2;
      }
    }
    if (expl.textContent === "ひき算・みぎはふたけた") {
      const num10 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      const num1 = num10[Math.floor(Math.random() * num10.length)];

      let min2 = 1;
      let max2 = 9;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      numran1.textContent = num1;
      numran2.textContent = num2;

      hid();
    }
    if (expl.textContent === "ひき算・やさしいふたけた") {
      hid();
      const num11 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
      const num1 = num11[Math.floor(Math.random() * num11.length)];

      const num10 = [10, 20, 30, 40, 50, 60, 70, 80];
      const num2 = num10[Math.floor(Math.random() * num10.length)];

      if (num1 > num2) {
        numran1.textContent = num1;
        numran2.textContent = num2;
      } else if (num1 < num2) {
        numran1.textContent = num2;
        numran2.textContent = num1;
      } else if (num1 === num2) {
        numran1.textContent = parseInt(num1) + 10;
        numran2.textContent = num2;
      }
    }
    if (expl.textContent === "ひき算・ふたけた") {
      hid();
      let min1 = 10;
      let max1 = 98;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 10;
      let max2 = 98;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      if (num1 > num2) {
        numran1.textContent = parseInt(num1);
        numran2.textContent = num2;
      } else if (num1 < num2) {
        numran1.textContent = num2;
        numran2.textContent = num1;
      } else if (num1 === num2) {
        numran1.textContent = parseInt(num1) + 1;
        numran2.textContent = num2;
      }
    }
  }

  let multcount = 0;

  function mutl() {
    multcount += 1;

    if (expl.textContent === "２の段") {
      numran1.textContent = 2;

      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "３の段") {
      numran1.textContent = 3;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "４の段") {
      numran1.textContent = 4;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "５の段") {
      numran1.textContent = 5;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "６の段") {
      numran1.textContent = 6;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "７の段") {
      numran1.textContent = 7;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "８の段") {
      numran1.textContent = 8;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "９の段") {
      numran1.textContent = 9;
      hid();
      if (multcount <= 9) {
        numran2.textContent = multcount;
      } else if (multcount > 9) {
        numran2.textContent = 1;
        multcount = 1;
      }
    }
    if (expl.textContent === "ぜんぶだよ") {
      let min1 = 1;
      let max1 = 9;
      const num1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);

      let min2 = 1;
      let max2 = 9;
      const num2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

      numran1.textContent = num1;
      numran2.textContent = num2;
      hid();
    }
  }

  start.addEventListener("click", () => {
    countNumber += 1;
    clicks.innerHTML = countNumber;

    pluss();
    minuss();
    mutl();
  });

  const box0 = document.querySelector(".box0");
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");
  const box4 = document.querySelector(".box4");
  const box5 = document.querySelector(".box5");
  const box6 = document.querySelector(".box6");
  const box7 = document.querySelector(".box7");
  const box8 = document.querySelector(".box8");
  const box9 = document.querySelector(".box9");

  box1.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box1.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box1.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box1.textContent;
    }
  });
  box2.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box2.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box2.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box2.textContent;
    }
  });

  box3.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box3.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box3.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box3.textContent;
    }
  });
  box4.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box4.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box4.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box4.textContent;
    }
  });
  box5.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box5.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box5.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box5.textContent;
    }
  });
  box6.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box6.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box6.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box6.textContent;
    }
  });
  box7.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box7.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box7.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box7.textContent;
    }
  });
  box8.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box8.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box8.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box8.textContent;
    }
  });
  box9.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box9.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box9.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box9.textContent;
    }
  });
  box0.addEventListener("click", () => {
    if (ansnum3.textContent === "") {
      ansnum3.textContent = box0.textContent;
    } else if (ansnum2.textContent === "") {
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box0.textContent;
    } else {
      ansnum1.textContent = ansnum2.textContent;
      ansnum2.textContent = ansnum3.textContent;
      ansnum3.textContent = box0.textContent;
    }
  });

  const imag = document.querySelector(".imag");
  const btn = document.getElementById("btn");
  const come = document.getElementById("come");
  const nice = document.querySelector(".nice");

  const explanation1 = document.querySelector(".explanation1");
  const explanation2 = document.querySelector(".explanation2");
  const explanation3 = document.querySelector(".explanation3");
  const explanation4 = document.querySelector(".explanation4");
  const explanation5 = document.querySelector(".explanation5");
  const explanation6 = document.querySelector(".explanation6");
  const explanation7 = document.querySelector(".explanation7");
  const explanation8 = document.querySelector(".explanation8");
  const explanation9 = document.querySelector(".explanation9");
  const order2 = document.querySelector(".order2");

  const explanation91 = document.querySelector(".explanation91");
  const explanation92 = document.querySelector(".explanation92");
  const explanation93 = document.querySelector(".explanation93");
  const explanation94 = document.querySelector(".explanation94");
  const explanation95 = document.querySelector(".explanation95");
  const explanation96 = document.querySelector(".explanation96");
  const explanation97 = document.querySelector(".explanation97");
  const explanation98 = document.querySelector(".explanation98");
  const explanation99 = document.querySelector(".explanation99");
  const lev9 = document.querySelector(".lev9");

  function adre() {
  
    come.classList.remove("showup");
    nice.classList.remove("showdown");
    imag.classList.add("hidden");
    ansnum1.textContent = "";
    ansnum2.textContent = "";
    ansnum3.textContent = "";
    numran1.textContent = "";
    numran2.textContent = "";
    again.classList.add("hidden");
  }

  explanation1.addEventListener("click", () => {
    expl.textContent = "たし算・ひとけた";
    order2.textContent = "+";
    adre();
  });
  explanation2.addEventListener("click", () => {
    expl.textContent = "たし算・ひだりはふたけた";
    order2.textContent = "+";
    adre();
  });
  explanation3.addEventListener("click", () => {
    expl.textContent = "たし算・やさしいふたけた";
    order2.textContent = "+";
    adre();
  });
  explanation4.addEventListener("click", () => {
    expl.textContent = "ひき算・ひとけた";
    order2.textContent = "-";
    adre();
  });
  explanation5.addEventListener("click", () => {
    expl.textContent = "ひき算・みぎはふたけた";
    order2.textContent = "-";
    adre();
  });
  explanation6.addEventListener("click", () => {
    expl.textContent = "ひき算・やさしいふたけた";
    order2.textContent = "-";
    adre();
  });
  explanation7.addEventListener("click", () => {
    expl.textContent = "たし算・ふたけた";
    order2.textContent = "+";
    adre();
  });
  explanation8.addEventListener("click", () => {
    expl.textContent = "ひき算・ふたけた";
    order2.textContent = "-";
    adre();
  });
  explanation92.addEventListener("click", () => {
    expl.textContent = "２の段";
    multcount = 0;
    adre();
  });
  explanation93.addEventListener("click", () => {
    expl.textContent = "３の段";
    multcount = 0;
    adre();
  });
  explanation94.addEventListener("click", () => {
    expl.textContent = "４の段";
    multcount = 0;
    adre();
  });
  explanation95.addEventListener("click", () => {
    expl.textContent = "５の段";
    multcount = 0;
    adre();
  });
  explanation96.addEventListener("click", () => {
    expl.textContent = "６の段";
    multcount = 0;
    adre();
  });
  explanation97.addEventListener("click", () => {
    expl.textContent = "７の段";
    multcount = 0;
    adre();
  });
  explanation98.addEventListener("click", () => {
    expl.textContent = "８の段";
    multcount = 0;
    adre();
  });
  explanation99.addEventListener("click", () => {
    expl.textContent = "９の段";
    multcount = 0;
    adre();
  });
  explanation91.addEventListener("click", () => {
    expl.textContent = "ぜんぶだよ";
    multcount = 0;
    adre();
  });

  explanation9.addEventListener("click", () => {
    expl.textContent = "ぜんぶだよ";
    order2.textContent = "×";
    adre();
    explanation1.style.display = "none";
    explanation2.style.display = "none";
    explanation3.style.display = "none";
    explanation4.style.display = "none";
    explanation5.style.display = "none";
    explanation6.style.display = "none";
    explanation7.style.display = "none";
    explanation8.style.display = "none";
    explanation9.style.display = "none";
    explanation91.classList.remove("hidden");
    explanation92.classList.remove("hidden");
    explanation93.classList.remove("hidden");
    explanation94.classList.remove("hidden");
    explanation95.classList.remove("hidden");
    explanation96.classList.remove("hidden");
    explanation97.classList.remove("hidden");
    explanation98.classList.remove("hidden");
    explanation99.classList.remove("hidden");
  });

  function read() {
    imag.classList.remove("hidden");
    come.classList.add("showup");
    nice.classList.remove("showdown");

    again.classList.add("hidden");
  }

  btn.addEventListener("click", () => {
    let ran1 = parseInt(numran1.textContent);
    let ran2 = parseInt(numran2.textContent);
    let ans =
      parseInt(ansnum1.textContent * 100) +
      parseInt(ansnum2.textContent * 10) +
      parseInt(ansnum3.textContent);

    if (
      expl.textContent === "たし算・ひとけた" ||
      expl.textContent === "たし算・ひだりはふたけた" ||
      expl.textContent === "たし算・やさしいふたけた" ||
      expl.textContent === "ひき算・ひとけた" ||
      expl.textContent === "ひき算・みぎはふたけた" ||
      expl.textContent === "ひき算・やさしいふたけた" ||
      expl.textContent === "ひき算・ふたけた" ||
      expl.textContent === "たし算・ふたけた" ||
      order2.textContent === "×"
    ) {
      if (expl.textContent === "たし算・ひとけた" && ran1 + ran2 === ans) {
        read();
      } else if (
        expl.textContent === "たし算・ひだりはふたけた" &&
        ran1 + ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "たし算・やさしいふたけた" &&
        ran1 + ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "ひき算・ひとけた" &&
        ran1 - ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "ひき算・みぎはふたけた" &&
        ran1 - ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "ひき算・やさしいふたけた" &&
        ran1 - ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "たし算・ふたけた" &&
        ran1 + ran2 === ans
      ) {
        read();
      } else if (
        expl.textContent === "ひき算・ふたけた" &&
        ran1 - ran2 === ans
      ) {
        read();
      } else if (order2.textContent === "×" && ran1 * ran2 === ans) {
        read();
      } else {
        again.classList.remove("hidden");
        come.classList.remove("showup");
        nice.classList.remove("showdown");

        imag.classList.add("hidden");
      }
    }
  });
  const icon = document.getElementById("icon");

  icon.addEventListener("click", () => {
    come.classList.remove("showup");
    nice.classList.add("showdown");
  });

  again.addEventListener("click", () => {
    hid();
  });
  const redo = document.querySelector(".redo");
  const reset = document.querySelector(".reset");
  redo.addEventListener("click", () => {
    hid();
  });
  function resets() {
    window.location.reload();
  }

  reset.addEventListener("click", () => {
    resets();
  });
}
