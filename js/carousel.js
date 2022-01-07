// gallery-container와 일치하는 문서 내 첫 번째 Element를 반환
const galleryContainer = document.querySelector('.gallery-container');
// gallery-controls와 일치하는 문서 내 첫 번째 Element를 반환
const galleryControlsContainer = document.querySelector('.gallery-controls');
// 배열 선언
const galleryControls = ['previous', 'next'];
// gallery-item에 일치하는 정적 NodeList를 반환
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  // 인스턴스 객체 생성 및 초기화
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // gallery에 있는 css classes를 업데이트
  updateGallery() {
    // carouselArray 함수를 배열 요소 각각에 대해 실행
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');  // 지정된 클래스 제거
      el.classList.remove('gallery-item-2');   // 지정된 클래스 값 제거
      el.classList.remove('gallery-item-3');  // 지정된 클래스 제거
      el.classList.remove('gallery-item-4');   // 지정된 클래스 값 제거
    });

    // 가장 처음부터 2개의 배열을 제외한 나머지 배열을 반환 후 나머지 요소를 실행
    this.carouselArray.slice(0, 2).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);  // 지정된 클래스 값 추가
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {
    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.push(this.carouselArray.shift());
    } else {
      this.carouselArray.unshift(this.carouselArray.pop());
    }
    this.updateGallery();
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls-add') {
          const newItem = document.createElement('img');
          const latestItem = this.carouselArray.length;
          const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

          newItem.setAttribute('data-index', this.carouselArray.length+1);

          // Then add it to the carouselArray and update the gallery
          this.carouselArray.splice(latestIndex, 0, newItem);
          document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
          this.updateGallery();
        } else {
          this.setCurrentState(control);
        }
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();



let current = 1; //keeps track of the current div

let mheight = $('.m-roles').height(); //the height of the roles div
let mnumberDivs = $('.m-roles').children().length; //the number of children of the roles div
let mfirst = $('.m-roles div:nth-child(1)'); //the first div nested in roles div

let height = $('.roles').height(); //the height of the roles div
let numberDivs = $('.roles').children().length; //the number of children of the roles div
let first = $('.roles div:nth-child(1)'); //the first div nested in roles div

document.querySelector('.gallery-controls-previous').addEventListener("click", changePrev);
document.querySelector('.gallery-controls-next').addEventListener("click", changeNext);

function changePrev() {
  let number = (current-2) * -height;
  let mnumber = (current-2) * -mheight;
  // console.log(mnumber, current);
  if (current === 1) {
    first.css('margin-top', '-100px');
    mfirst.css('margin-top', '-414px');
    current = 4;
  } else {
    first.css('margin-top', number + 'px');
    mfirst.css('margin-top', mnumber + 'px');
    current--;
  }
};

function changeNext() {
  let number = current * -height;
  let mnumber = current * -mheight;
  // console.log(number, current);
  if (current === numberDivs && current === mnumberDivs) {
    first.css('margin-top', '0px');
    mfirst.css('margin-top', '0px');
    current = 1;
  } else {
    first.css('margin-top', number + 'px');
    mfirst.css('margin-top', mnumber + 'px');
    current++;
  }
};