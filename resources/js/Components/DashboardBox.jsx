export default function DashboardBox({ className = '', children, ...props }) {
    return (
        <div
            {...props}
            className={
                'bg-white overflow-hidden shadow rounded-lg h-[20px] w-[80px] ' +
                className
            }
        >
            {children}
        </div>
    );
}
