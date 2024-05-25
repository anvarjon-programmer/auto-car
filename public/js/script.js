const carsData = [
    { id: 0, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },
    { id: 1, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },
    { id: 2, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },
    { id: 4, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },
    { id: 5, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },
    { id: 5, img: 'https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png' },

  ];
  
  const cars = document.querySelector('.cars');
  
  const mapCars = carsData.map(
    (car) => `
    <a href="#" class="flex  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div>
    <img class="object-cover w-[270px] h-auto  rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src=${car.img} alt="">
    </div>
    <div class=" md:p-5 flex gap-3">
        <div>
            <span class="flex items-center gap-[4px]">
                <img src="./imgs/dolar.png" alt="">
                <p class="text-primary">143010000</p>
            </span>
            <span class="flex items-center gap-[4px]">
                <img src="./imgs/star.png" alt="">
                <p class="text-primary">Оценка: S</p>
            </span>
            <span class="flex items-center gap-[4px]">
                <img src="./imgs/Frame.png" alt="">
                <p class="text-primary">2 лот</p>
            </span>
            <span class="flex items-center gap-[4px]">
                <img src="./imgs/hummer.png" alt="">
                <p class="text-primary">JU Gifu</p>
            </span>
            <span class="flex items-center gap-[4px] ml-6">
                <p class="text-primary">27.04.2024</p>
            </span>
        </div>

        <div class="flex  bg-[#EFEFEF] rounded-[10px] ">
            <div class="flex items-center px-2">
                    <img class="md: mb-24" src="./imgs/setting.png" alt="">
                <div class='pr-4'>
                    <p class="text-primary">Седан</p>
                    <p class="text-primary">2012 г.</p>
                    <p class="text-primary">1.4 л.</p>
                    <p class="text-primary">137 л.с.</p>
                    <p class="text-primary">23546км</p>
                </div>
            </div>
        </div>
    </div>
</a>`
  );
  
  cars.innerHTML = mapCars.join('');
  