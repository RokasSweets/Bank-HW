function AccountsFilter({ filterHandler }) {
    return (
        <section className="filter summary col-4 mt-4">
            <label htmlFor="filter">Filter:</label>
            <select
            className="form-control"
                id="filter"
                onChange={filterHandler}>
                <option value="all">All accounts</option>
                <option value="positive">Positive Balance Accounts</option>
                <option value="empty">Empty Accounts</option>
            </select>
        </section>
    );
}

export default AccountsFilter;