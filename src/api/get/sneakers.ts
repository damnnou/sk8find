import axios from 'axios';

export const getAllSneakers = async () => {
    try {
        const resp = await axios.get(
            'https://www.traektoria.ru/slim/pages/section/wear/?PAGEN_1=2&lid=ta&sessid=475fbcf74c48bbc9723dac5e5093cdde',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = resp.data.data.MAIN.content.products;

        // return data;

        const sortedSneakers = data.map((sneaker) => {
            return {
                title: sneaker.model_name,
                description: '',
                img:
                    'https://www.traektoria.ru' +
                    sneaker.colors_list[0].gallery[0],
                price: sneaker.colors_list[0].retail_price,
                brand: sneaker.brand.name,
            };
        });

        return sortedSneakers;
    } catch (e) {
        console.log(e);
    }
};
