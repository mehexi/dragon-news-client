import React, { useState } from 'react';
import Social from '../sheard/sidenavs/Social';
import Catagory from '../sheard/sidenavs/Catagory';
import PostContainer from '../sheard/PostContainer';

const MainPost = () => {
    const [selectedCatagory, setSelectedCatagory] = useState('0')
    const handleSelected = (id) => {
        setSelectedCatagory(id)
    } 

    console.log(selectedCatagory)
    
    return (
        <section className='grid grid-cols-5 mx-[120px] mt-[50px] gap-12'>
            <div className='col-span-1'>
                <Catagory handleSelected={handleSelected}></Catagory>
            </div>
            <div className='col-span-3'>
                <PostContainer selectedCatagory={selectedCatagory}></PostContainer>
            </div>
            <div className='col-span-1'>
                <Social></Social>
            </div>
        </section>
    );
};

export default MainPost;