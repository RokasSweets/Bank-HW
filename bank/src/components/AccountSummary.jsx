const AccountSummary = ({ accounts }) => {
    return (
        <div className="summary">
            <div>
                <p>We have {accounts.length} customers!</p>
                <p>Our bank holds {(+accounts.reduce((t, c) => t + c.sum, 0).toFixed(2)).toLocaleString('lt')}Є</p>
            </div>
            <h2>HW Bank</h2>
        </div>
    );
};

export default AccountSummary;