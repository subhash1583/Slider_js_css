            const customerImage = document.querySelector("#customer-img");
            const customerName = document.querySelector("#customer-name");
            const customerText = document.querySelector("#customer-text");
            const btnn = document.querySelectorAll(".arrow");
            var index = 0;
            const customers = [];

            let img, name, text;

            function Customer(img, name, text) {
                this.img = img
                this.name = name
                this.text = text
            }

            function creatcustomer(img, name, text) {
                img1 = `./image/${img}.jpg`;
                let customer = new Customer(img1, name, text)
                customers.push(customer)
            }
            creatcustomer(0, 'Anna', 'bsvui sbfdui bsvjasbuibaskjbasjvaiosfhndian abnsui baj aj snbfdguias   asdnbfuiasbd  sadbvuiasbd asu');
            creatcustomer(1, 'Jhon', 'bsvui sbfdui bsdtrsubhas   njkasdbjk ass   asdnbfuiasbd  sadbvuiasbd asu');
            creatcustomer(2, 'Nancy', 'bsvui sbfdui bsvjasbuibahi thbuis h as ashdhsd ahsd habnsui baj aj snbfdguias   asdnbfuiasbd  sadbvuiasbd asu');
            creatcustomer(3, 'Amy', 'bsvui sbfdui bsvasdasdf444444basjvaiosfhndian abnsui baj aj snbfdguias   asdnbfuiasbd  sadbvuiasbd asu');


            btnn.forEach(function(butn) {
                butn.addEventListener("click", function(e) {

                    if (e.target.parentElement.classList.contains('prevbtn')) {
                        if (index === 0) {
                            index = customers.length

                        }
                        index--
                        customerImage.src = customers[index].img
                        customerName.textContent = customers[index].name
                        customerText.textContent = customers[index].text



                    }
                    if (e.target.parentElement.classList.contains('nexbtn')) {
                        if (index === customers.length) {
                            index = 0
                        }
                        index++
                        customerImage.src = customers[index].img
                        customerName.textContent = customers[index].name
                        customerText.textContent = customers[index].text
                    }
                })
            })