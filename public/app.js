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

    // active class related
    const $navItems = $('.nav-item');
    const navActiveClass = 'active-item';
    // individual nav items
    const $navItemCollection = $('#nav-collection');
    const $navItemAddCar = $('#nav-add');

    const navItemActive = (navItem, activeClass) => {
        console.log($navItems)
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove(activeClass);
        }
        $(navItem).addClass(activeClass);
    }

    $('#nav-collection').on('click', () => {
        console.log('clicked - nav item should have red color')
        // navItemActive($navItemCollection, navActiveClass);
    })
    
    $('#nav-add').on('click', () => {
        console.log('clicked - nav item should have red color')
        // navItemActive($navItemAddCar, navActiveClass);
    })
})