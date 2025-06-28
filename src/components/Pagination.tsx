interface PaginationProps {
    currentPage: number;
    totalPages?: number;
}

export default function Pagination({ currentPage, totalPages = 10 }: PaginationProps) {
    const nextPage = currentPage + 1;
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;

    return (
        <div className="row" style={{paddingTop: 40}}>
            <div className="col-sm-12 ">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href={`/games/${prevPage}`} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        Array.from({length: totalPages}, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = pageNumber === currentPage;
                            return (
                                <li className={`page-item ${isActive ? 'active' : ''}`} key={index}>
                                    <a className="page-link" href={`/games/${pageNumber}`}>{pageNumber}</a>
                                </li>
                            );
                        })
                    }
                    <li className="page-item">
                        <a className="page-link" href={`/games/${nextPage}`} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
} 