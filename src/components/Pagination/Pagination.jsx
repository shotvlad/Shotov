import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux';
import CharacterItem from "./CharacterItem/CharacterItem";
import "./Pagination.css";

const Pagination = ({ itemsPerPage }) => {
    const characters = useSelector(state => state.characters.characters);

    // Отступ элементов
    const [itemOffset, setItemOffset] = useState(0);

    // Текущий список элементов
    const [currentItems, setCurrentItems] = useState([]);

    // Номер страницы
    const [pageCount, setPageCount] = useState(0);
    const [endOffset, setEndOffset] = useState(0);

    // Симуляция получения данных из API
    useEffect(() => {
        setEndOffset(itemOffset + itemsPerPage);
        setCurrentItems(characters.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(characters.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, characters, endOffset]);

    // Регистрация клика на другую страницу
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % characters.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="items">
                {currentItems.length > 0
                    ? currentItems.map((item) => {
                        return (
                            <CharacterItem character={item} />
                        );
                    })
                    : <h3>Записей не найдено!</h3>}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
}

export default Pagination;