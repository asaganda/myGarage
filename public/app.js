$(()=> {
    console.log('js connected properly')
//    $('.hamburger-menu').on('click', () => {
//         $('#nav-links-container').toggle('fast');
//    })
    let garageDoorDown = true;
    // at document ready we want to check garage door boolean value


    $('#open-garage-door').on('click', () => {
        $('#garage-door').css('transform', 'translateY(-100%)')
        garageDoorDown = false;
    })
    // if (garageDoorDown === false) {
    //     $('#garage-door').css('transform', 'translateY(-100%)')
    // }

    // const makeDivs = () => {
    //     const divNumber = 4
    //     const $garageDoor = $('#garage-door');
    //     for (let i = 0; i < divNumber; i++) {
    //         const $garageSection = $('<div>').addClass('garage-section')
    //         $garageDoor.append($garageSection)
    //     }
    // }
    // makeDivs()

    // testing active class with location pathname
    // checking to see if location pathname is /garage/new
    // else check location pathname is /garage
    const activeNavTabCheck = () => {
        if (document.location.pathname.split("/")[2] === 'new') {
            document.querySelector('#nav-add').classList.add('active')
        } else if (document.location.pathname.split("/")[1] === 'garage') {
            document.querySelector('#nav-collection').classList.add('active')
        } else {
            console.log('i should never see this because collection or new should be active')
        }
    }
    activeNavTabCheck()
})