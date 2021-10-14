import React from 'react';
import styled from '@emotion/styled'
import { clamps, margin, colors, flex } from '../Global/Styles/__global'

const FilterStyle = styled('form')`
    width: ${clamps.filter_div_width};
    ${margin.right}
    ${flex.flexCol}
    background-color: #754349;
    padding: ${clamps.med_margin} 0;
    box-shadow: -2px 1px 3px #aaa,
                           2px 1px 3px #aaa ;
    position: absolute;
    right: ${clamps.xs_margin};
    top: 20px;
    z-index: 12;
    .title {
        color: ${colors.main_bold};
    }
    section {
        width: auto;
        ${margin.center}
        p{
            text-decoration: underline;
            color: ${colors.light_neutral};
        }
        div:first-child {
            margin-top: ${clamps.xs_margin};
        }
        div {
            label {
                color: ${colors.light_neutral};
            }
            input[checked] {
                color: ${colors.main_bold};
            }
        }
    }
`


const FilterOptions = (props) => {
    console.log(props.categories)
    let uniqueCategories = [...new Set(props.categories)];
    const categories = uniqueCategories.map(cat => (
        <div>
            <input type="checkbox" id={cat} name="scales" className="checkbox" onClick={(e) => props.filterCheck(e.target.id)} />
            <label for={cat}>{cat}</label>
        </div>
    ))

    return (
    <>
    {
        props.open ? 
        <>
        <button className="filter animate-filter" ariaLabel="filter-blogs" onClick={() => props.click(!props.open) }>X</button>
        <FilterStyle>
            <h4 className="title">Options</h4>
            <section className="categories">
                <p>Categories</p>
                {categories}
            </section>
            <button className="submit" type="button"  onClick={() => props.click(!props.open)}> Done </button>
        </FilterStyle>
        </>
        :
        <button className="filter" ariaLabel="filter-blogs" onClick={() => props.click(!props.open) }>+</button>
    }
    </>
)}

export default FilterOptions;