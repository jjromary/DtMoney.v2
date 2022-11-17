import { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { TransactionsContext } from "../../Contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../Utils/Formatter";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transaction() {
	const { transactions } = useContext(TransactionsContext)

	return (
		<div>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						{transactions.map(transaction => {
							return (
								<tr key={transaction.id}>
									<td width='50%'>{transaction.description}</td>
									<td>
										<PriceHighLight varian={transaction.type}>
											{transaction.type === 'outcome' && '- '}
											{priceFormatter.format(transaction.price)}
										</PriceHighLight>
									</td>
									<td>{transaction.category}</td>
									<td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
								</tr>
							)
						})}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	)
}
