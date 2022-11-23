$(()=> {
//    $('.hamburger-menu').on('click', () => {
//         $('#nav-links-container').toggle('fast');
//    })
    $('#open-garage-door').on('click', () => {
        $('#garage-door').css('transform', 'translateY(-100%)')
    })

    // const makeDivs = () => {
    //     const divNumber = 4
    //     const $garageDoor = $('#garage-door');
    //     for (let i = 0; i < divNumber; i++) {
    //         const $garageSection = $('<div>').addClass('garage-section')
    //         $garageDoor.append($garageSection)
    //     }
    // }
    // makeDivs()
})