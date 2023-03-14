const AccountSummary = ({ accounts }) => {
    return (
        <div className="summary">
            <div>
                <p>We have {accounts.length} customers!
                Bank currently holds {(+accounts.reduce((t, c) => t + c.sum, 0).toFixed(2)).toLocaleString('lt')}Є</p>
            </div>
            <h2 className="mt-4">HW Bank</h2>
        </div>
    );
};

export default AccountSummary;