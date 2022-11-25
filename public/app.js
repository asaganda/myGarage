$(()=> {
    console.log('js connected properly')
//    $('.hamburger-menu').on('click', () => {
//         $('#nav-links-container').toggle('fast');
//    })

    $('#open-garage-door').on('click', () => {
        $('#garage-door').css('transform', 'translateY(-100%)')
        garageDoorDown = false;
    })

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

    // sessionStoreage check
    // when homepage first loads - garage door shows up, we store some sata in sessionStorage when "open garage" btn is clicked
    // when homepage loads for anytime after first time and specific location.pathname is hit, we want to check sessionStorage if some data is there (which it should be) , then we don't show it
    // NOTE: refreshing the page won't reset sessionStorage - we have to kill tab/window
    $("#open-garage-door").on('click', () => {
        sessionStorage.setItem("garage", "yes");
        console.log('garage door opened')
    })

    const garageDoorCheck = () => {
        const data = sessionStorage.getItem("garage");
        console.log(data);
        if (document.location.pathname === '/garage' && data === "yes") {
            console.log('i dont want to see garage door')
            $("#garage-door").css('display', 'none')
        }
    }

    garageDoorCheck()
})