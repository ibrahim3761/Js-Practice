import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({assets}) => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin assets={assets} name={'Togo'}></Cousin>
                <Cousin name={'Toma'}></Cousin>
                <button onClick={() => setMoney(money+5000)}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;