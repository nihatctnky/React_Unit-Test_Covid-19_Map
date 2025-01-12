
import millify from 'millify';
import Item from './item';

const Statistics = () => {
    return (
        <div className="container py-0">
            <div className="bg-white shadow-xl rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]">
                <Item
                    color="text-pink-500"
                    text="Toplam Vaka"
                    value={millify(704753890)} />

                <Item
                    color="text-green-400"
                    text="Toplam İyieşen"
                    value={millify(675619811)} />

                <Item
                    color="text-gray-500"
                    text="Toplam Vefat"
                    value={millify(710681)} />

            </div>
        </div>
    )
}

export default Statistics