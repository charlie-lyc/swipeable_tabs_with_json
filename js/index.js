import data  from './data.json' assert { type: 'json' }
// console.log(data)

for (let i = 0; i < data.length; i ++) {
    const liEle = document.createElement('li')
    liEle.className = 'tab'
    const aEle = document.createElement('a')
    aEle.href = '#profile-' + (i + 1).toString()
    if (i === 0) {
        aEle.className = 'active'
    }
    liEle.appendChild(aEle)
    document.getElementById('tabs-swipe').appendChild(liEle)
}

data.map((profile, idx) => {
    const divEle1 = document.createElement('div')
    divEle1.textContent = '이름 : ' + profile.fullName
    const divEle2 = document.createElement('div')
    divEle2.textContent = '생년월일 : ' + profile.birthdate
    const divEle3 = document.createElement('div')
    divEle3.textContent = '아호 : ' + profile.byname
    const divEle4 = document.createElement('div')
    divEle4.textContent = '직책 : ' + profile.position
    const divEle5 = document.createElement('div')
    divEle5.textContent = '입회일 : ' + profile.registrationDate
    const divEle6 = document.createElement('div')
    divEle6.textContent = '추천인 : ' + profile.recommender
    const divEle7 = document.createElement('div')
    divEle7.textContent = '회원번호 : ' + profile.rotaryId
    const divEle8 = document.createElement('div')
    divEle8.textContent = '연락처 : '
    const splitedPhoneNumbers = profile.phone.split('').filter(ele => ele !== '-')
    const phoneNumber = splitedPhoneNumbers.join('')
    const aEle2 = document.createElement('a')
    aEle2.href = 'tel:' + phoneNumber
    aEle2.textContent = profile.phone
    divEle8.appendChild(aEle2)
    const divEle9 = document.createElement('div')
    divEle9.textContent = `${idx + 1} / ${data.length} 페이지`
    const liEle2 = document.createElement('li')
    liEle2.id = 'profile-' + (idx + 1).toString()
    liEle2.className = 'col s12'
    liEle2.append(divEle1, divEle2, divEle3, divEle4, divEle5, divEle6, divEle7, divEle8, divEle9)
    const rotaryProfiles = document.getElementById('rotaryProfiles')
    rotaryProfiles.appendChild(liEle2)
})