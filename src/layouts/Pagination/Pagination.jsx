export default function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>

        </div>
    )
}