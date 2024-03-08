import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams, }: {
        searchParams?: {
            query?: string;
            page?: string;
        };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query);

    // const customers = await fetchAllCustomers();
    // console.log(customers);

    return (
        <div className="w-full">
            {/* <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div> */}
            <Table 
                customers={customers}
            />
        </div>
);
}