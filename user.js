document.addEventListener('alpine:init', () =>{
    Alpine.store('user',{
        profile: {
            title: '',
            first_name: '',
            last_name: '',
            country: '',
            address: '',
            email: '',
            phone: '',
            special_request: '',
        },

        reservation: {
            hotel: 'The Luxe Vista Hotel',
            check_in: '',
            check_out:'',
            singleRoom:'',
            doubleRoom:'',
            tripleRoom:'',
            extra_bed:'',
            promocode:'',
            adults:'',
            children:'',

            //final cals
            total_cost: 0,
            total_accommodation_cost: 0,
            discount_percentage: 0,
            total_discount: 0,
            total_adventure_cost: 0,
            final_cost: 0,

        },

        adventure: {
            destination: '',
            date: '',
            Local: '',
            Foreign:'',
            local_child:'',
            local_adult:'',
            foreign_child:'',
            foreign_adult:'',
            guide_adult:'',
            guide_kid:'',
            special_request:'',
            // total_adventure_cost: 0,
        },

        payment: {
            card_type: null,
            cardholder: null,
            cardnumber: null,
            expirydate: null,
            securitycode: null,
        },
        

        updateUser() {
            localStorage.setItem(
              "user_profile",
              JSON.stringify(this.$store.user.profile)
            );
            localStorage.setItem(
                "user_reservation",
                JSON.stringify(this.$store.user.reservation)
            );
            localStorage.setItem(
                "user_adventure",
                JSON.stringify(this.$store.user.adventure)
            );
            localStorage.setItem(
                "user_payment",
                JSON.stringify(this.$store.user.payment)
            );
            
        },

        init() {
        this.profile =
            JSON.parse(localStorage.getItem("user_profile")) || this.profile;
        this.reservation =
            JSON.parse(localStorage.getItem("user_reservation")) || this.reservation;
        this.adventure =
            JSON.parse(localStorage.getItem("user_adventure")) || this.adventure;
        this.payment =
            JSON.parse(localStorage.getItem("user_payment")) || this.payment;
        },


    });
});
