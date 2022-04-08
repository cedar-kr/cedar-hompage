export const headerData = [
  {
    id: 1,
    text: '디지털 사이니지',
    src: '/imgs/headers/engText_digital.png',
    subs: '현대백화점 디지털 사이니지',
    imgs: [
      {
        src:'/imgs/headers/display.png',
        width:250,
        height:430,
      },
      {
        src:'/imgs/headers/plant.png',
        width:250,
        height:430,
      }
    ],
  },
  {
    id:2,
    text:'키오스크',
    src: '/imgs/headers/engText_digital.png',
    subs: 'LG U+ 키오스크',
    imgs: [
      {
        src:'/imgs/headers/kiosk.png',
        width:250,
        height:430,
      },
      {
        src:'/imgs/headers/usim.png',
        width:250,
        height:430,
      }
    ],
  }
];

export const businessData = [
  {
    icon: "/icons/kiosk.svg",
    icon_m: "/icons/display_m.svg",
    title: "Display & Kiosk Production",
    content: "강한 내구성과 긴 수명의 디스플레이와 키오스크 제품으로 고객 요구사항에 부흥"
  },{
    icon: "/icons/time.svg",
    icon_m: "/icons/management_m.svg",
    title: "Management System",
    content: "모니터링 대시보드, 원격 관리, 방송 예약 편성 등 디지털 사이니지 관리 시스템 제공"
  },{
    icon: "/icons/touch.svg",
    icon_m: "/icons/experience_m.svg",
    title: "Experience Optimization",
    content: "전용 A/S고객센터 운영으로 문제 해결을 위한 안내 및 안정적 사용을 위한 최적화 가이드 제공 "
  }
];

export const referanceData = [
  {
    id:1,
    title:"길찾기 키오스크",
    src:'/imgs/referances/kiosk.png',
    bg:'/imgs/referances/길찾기.jpg',
    subs:'판교 알파돔시티 테크원빌딩',
    imgSize:{
      width:277,
      height:273,
    },
  },
  {
    id:2,
    title:'유심 키오스크',
    src:'/imgs/referances/usim.png',
    bg:'/imgs/referances/유심키오스크.jpg',
    subs:'LG U+ 무인 매장',
    imgSize:{
      width:277,
      height:313,
    }
  },
  {
    id:3,
    title:'LED',
    src:'/imgs/referances/led.png',
    video:'/videos/LED.mp4',
    subs:'현대백화점',
    imgSize:{
      width:364,
      height:230,
    }
  },
  {
    id:4,
    title:'멀티비젼',
    src:'/imgs/referances/multi.png',
    bg:'/imgs/referances/멀티비젼.jpg',
    subs:'하나은행',
    imgSize:{
      width:306,
      height:103,
    }
  },
  {
    id:5,
    title:'터치 키오스크',
    src:'/imgs/referances/kimpo.png',
    bg:'/imgs/referances/터치키오스크.jpg',
    subs:'김포국제공항, 청주국제공항',
    imgSize:{
      width:263,
      height:298,
    }
  },
];

export const referanceMobileData = [
  {
    id:1,
    title:"길찾기 키오스크",
    src:'/imgs/referances/kiosk.png',
    bg:'/imgs/referances/길찾기.jpg',
    subs:'판교 알파돔시티<br/> 테크원빌딩',
    imgSize:{
      width:121,
      height:119,
    },
  },
  {
    id:2,
    title:'유심 키오스크',
    src:'/imgs/referances/usim.png',
    bg:'/imgs/referances/유심키오스크.jpg',
    subs:'LG U+ 무인 매장',
    imgSize:{
      width:120,
      height:137,
    }
  },

  {
    id:3,
    title:'멀티비젼',
    src:'/imgs/referances/multi.png',
    bg:'/imgs/referances/멀티비젼.jpg',
    subs:'하나은행',
    imgSize:{
      width:130,
      height:41,
    }
  },
  {
    id:4,
    title:'터치 키오스크',
    src:'/imgs/referances/kimpo.png',
    bg:'/imgs/referances/터치키오스크.jpg',
    subs:'김포국제공항,<br/> 청주국제공항',
    imgSize:{
      width:69,
      height:108,
    }
  },

  {
    id:5,
    title:'LED',
    src:'/imgs/referances/led.png',
    video:'/videos/LED.mp4',
    subs:'현대백화점',
    imgSize:{
      width:120,
      height:75.824,
    }
  },
];

export const solutionData = [
  {
    id:1,
    title:'솔루션',
    subs:'하드웨어를 가리지 않고 확장이 용이한</br>웹 기반 디지털 사이니지 솔루션.',
    contents:[
      {
        type:'defualt',
        src:'/imgs/solutions/01_theme.png',
        name:'디자인 템플릿',
        grid:4,
        imgWidth:368,
        imgHeight:167,
        left:0,
        top:85,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/01_sensor.png',
        name:'다양한 센서 연동',
        grid:4,
        imgWidth:450,
        imgHeight:280,
        left:15,
        top:20,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/01_multi.png',
        name:'원격 멀티 디바이스 관리',
        grid:6,
        imgWidth:516,
        imgHeight:151,
        left:0,
        top:90,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/01_group.png',
        name:'그룹관리',
        grid:2,
        imgWidth:227,
        imgHeight:207,
        left:7,
        top:93,
      },
    ]
  },
  {
    id:2,
    title:'하드웨어',
    subs:'디바이스의 종류에 구애받지 않고</br>어디서든 관리 가능.',
    contents:[
      {
        type:'image',
        src:'/imgs/solutions/02_led.png',
        name:'LED',
        grid:3,
      },
      {
        type:'image',
        src:'/imgs/solutions/02_multi.png',
        name:'멀티비전',
        grid:3,
      },
      {
        type:'image',
        src:'/imgs/solutions/02_kiosk.png',
        name:'키오스크',
        grid:2,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/02_oled.png',
        name:'투명OLED<br/>터치 디스플레이',
        grid:4,
        imgWidth:214,
        imgHeight:186,
        left:100,
        top:65,
      },
      {
        type:'image',
        src:'/imgs/solutions/02_sinage.png',
        name:'일반<br/>디지털 사이니지',
        grid:4,
        left:100,
        top:65,
      },
    ]
  },
  {
    id:3,
    title:'관리페이지',
    subs:'그룹 편성부터 원격 모니터링, 오류 상황 감지</br>기능을 통해 효율성 극대화',
    contents:[
      {
        type:'defualt',
        src:'/imgs/solutions/03_si.png',
        name:'통계관리',
        grid:5,
        imgWidth:283,
        imgHeight:183,
        left:120,
        top:80,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/03_monitor.png',
        name:'원격 모니터링',
        grid:3,
        imgWidth:200,
        imgHeight:152,
        left:0,
        top:110,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/03_error.png',
        name:'오류 감지',
        grid:3,
        imgWidth:332,
        imgHeight:182,
        left:0,
        top:100,
      },
      {
        type:'image',
        src:'/imgs/solutions/03_otp.png',
        name:'OTP 로그인',
        grid:5,
        left:0,
        top:0,
      },
    ]
  }
];

export const solutionMobileData = [
  {
    id:1,
    title:'솔루션',
    contents:[
      {
        type:'defualt',
        src:'/imgs/solutions/01_theme.png',
        name:'디자인<br/>템플릿',
        grid:2,
        imgWidth:368,
        imgHeight:167,
        left:0,
        top:85,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/01_multi.png',
        name:'원격 멀티<br/>디바이스<br/>관리',
        grid:2,
        imgWidth:516,
        imgHeight:151,
        left:0,
        top:90,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/01_sensor.png',
        name:'다양한 센서 연동',
        grid:4,
        imgWidth:450,
        imgHeight:280,
        left:15,
        top:20,
      },
      
      {
        type:'defualt',
        src:'/imgs/solutions/01_group.png',
        name:'그룹관리',
        grid:4,
        imgWidth:227,
        imgHeight:207,
        left:7,
        top:93,
      },
    ]
  },
  {
    id:2,
    title:'하드웨어',
    contents:[
      {
        type:'image',
        src:'/imgs/solutions/02_led.png',
        name:'LED',
        grid:4,
      },

      {
        type:'image',
        src:'/imgs/solutions/02_kiosk.png',
        name:'키오스크',
        grid:2,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/02_oled.png',
        name:'투명OLED<br/>터치 디스플레이',
        grid:2,
        imgWidth:214,
        imgHeight:186,
        left:100,
        top:65,
      },
      {
        type:'image',
        src:'/imgs/solutions/02_multi.png',
        name:'멀티비전',
        grid:4,
      },
      {
        type:'image',
        src:'/imgs/solutions/02_sinage.png',
        name:'일반<br/>디지털 사이니지',
        grid:4,
        left:100,
        top:65,
      },
    ]
  },
  {
    id:3,
    title:'관리페이지',
    contents:[
      {
        type:'defualt',
        src:'/imgs/solutions/03_si.png',
        name:'통계관리',
        grid:5,
        imgWidth:283,
        imgHeight:183,
        left:120,
        top:80,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/03_monitor.png',
        name:'원격<br/>모니터링',
        grid:2,
        imgWidth:200,
        imgHeight:152,
        left:0,
        top:110,
      },
      {
        type:'defualt',
        src:'/imgs/solutions/03_error.png',
        name:'오류 감지',
        grid:2,
        imgWidth:332,
        imgHeight:182,
        left:0,
        top:100,
      },
      {
        type:'image',
        src:'/imgs/solutions/03_otp.png',
        name:'OTP 로그인',
        grid:5,
        left:0,
        top:0,
      },
    ]
  }
];

export const historyData = [
  {
    year:2022,
    content:[
      '사이니지 솔루션 MODI v2개편',
      '마스턴 사옥 빌딩 사이니지 계약 체결',
      '카카오캠퍼스 계약 체결',
      '센텀포인트 강남 계약 체결',
    ],
    img:'/imgs/historys/2022.jpg',
  },
  {
    year:2021,
    content:[
      '현대백화점 파크원 사이니지 설치',
      '삼양식품 밀양공장 계약',
      '하나은행 계약',
      '세종큐비즈 중고폰 매입 키오스크 솔루션 계약',
      '현대백화점 파크원 사이니지 설치',
      'MODI GS인증 1등급 획득'
    ],
    img:'/imgs/historys/2021.jpg',
  },
  {
    year:2020,
    content:[
      '수협중앙회 사내방송 솔루션 재계약',
      '일본, 미국 특허 출원',
      'LG유플러스 유심 키오스크 계약',
      '김포국제공항 계약',
      '청주국제공항 계약',
      '판교알파돔 빌딩안내 설비공사 계약'
    ],
    img:'/imgs/historys/2020.jpg',
  },
  {
    year:2019,
    content:[
      '청년 친화 강소기업 선정',
      '경찰청 키오스크 계약',
    ],
    img:'/imgs/historys/2019.jpg',
  },
  {
    year:2018,
    content:[
      '현대백화점 울산점 계약',
      '킨텍스 식품관 계약',
      '마루이물산 MOU',
      '강남역 VR스테이션 계약 체결',
      '연세대학교 재계약',
      '인도 스타트업 사절단',
      '디지털 뱅크 dsj 박람회',
    ],
    img:'/imgs/historys/2018.jpg',
  },
  {
    year:2017,
    content:[
      '가든파이브 현대시티몰 계약',
      '현대 백화점 무역센터 계약',
      '제 2 롯데타워 하이마트 계약',
      '현대백화점 천호점 계약'
    ],
    img:'/imgs/historys/2017.jpg',
  },
  {
    year:2016,
    content:[
      '서울 과학기술대학교 우수가족회사상 수상(모델기업상)',
      '현대 HCN 계약 체결',
      '	기업부설연구소 설립',
      '	안양창조산업진흥원 협약 체결',
      '	스마트미디어 X캠프 디지털 사이니지 분야 우수상 수상',
      '	글로벌 유망 컨텐츠 성과 보고회',

    ],
    img:'/imgs/historys/2016.jpg',
  },
  {
    year:2015,
    content:[
      '	LG CNS 협력업체 등록',
      '	아주대학교 산악 협력 협약 체결',
      '	LG U+ & 연세대학교 협력 협약 체결',
      '	연세대학교 (교내 소식 및 홍보 사이니지)',
      '	현대 HCN, 현대 미디어 투자 유치',
      '	수협 중앙회 계약 체결',
      '	벤처기업인증',
      '	미래부 ICT분야 유망기업(K-Global) 선정',
    ],
    img:'/imgs/historys/2015.jpg',
  },
  {
    year:2014,
    content:[
      'LG U+ MOU 체결',
      '서울시 챌린지 1000 프로젝트 선정',
      '수협은행 계약 체결',
    ],
    img:'/imgs/historys/2014.jpg',
  },
  {
    year:2013,
    content:[
      '주식회사 시더 설립',
      '	부경대학교 & 서울과학기술대학교 개발 협력 계약 체결',
      '	삼성전자 플랫폼 런칭 파트너사 선정',
      '	스마트 챌린지 휴맥스분야 최우수상 수상',
    ],
    img:'/imgs/historys/2013.jpg',
  },
]

export const solutionPkData = [
  {
    name: 'MODI Local',
    details:[
      {
        icon:{
          src:'/icons/usb.svg',
          width: 82.36,
          height:70.71,
        },
        type:'USB',
        subs:[
          {
            text:'비 인터넷 환경 사용 가능',
          }
        ]
      },
      {
        icon:{
          src:'/icons/intra.svg',
          width:51.11,
          height:60
        },
        type:'Intra',
        subs:[
          {
            text:'내부 인터넷 사용가능',
          },
          {
            text:'기업 보안 특화 솔루션',
          }
        ]
      },
    ]
  },{
    name: 'MODI Cloud',
    details:[
      {
        icon:{
          src:'/icons/Star1.svg',
          width:100,
          height:100
        },
        type:'Standard',
        subs:[
          {
            text:'콘텐츠 클라우드 저장',
          },
          {
            text:'실시간 원격 모니터링',
          },
          {
            text:'안드로이드 STB',
            point:true,
          }
        ]
      },
      {
        icon:{
          src:'/icons/Star2.svg',
          width:100,
          height:100
        },
        type:'Professional',
        subs:[
          {
            text:'콘텐츠 클라우드 저장',
          },
          {
            text:'실시간 원격 모니터링',
          },
          {
            text:'Window, Linux 호환 가능',
            point:true,
          },
          {
            text:'디자인 템플릿 사용',
            point:true,
          },
          {
            text:'그룹편성',
            point:true,
          },
          {
            text:'스마트폰 제어',
            point:true,
          }
        ]
      },
      {
        icon:{
          src:'/icons/Star3.svg',
          width:100,
          height:100
        },
        type:'Enterprise',
        subs:[
          {
            text:'콘텐츠 클라우드 저장',
          },
          {
            text:'실시간 원격 모니터링',
          },
          {
            text:'모든 OS 호환 가능',
            point:true,
          },
          {
            text:'디자인 템플릿 사용',
          },
          {
            text:'그룹편성',
          },
          {
            text:'스마트폰 제어',
          },
          {
            text:'생방송 지원',
            point:true,
          }
        ]
      },
    ]
  }
]