import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction() {
	return (
		<div>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						<tr>
							<td width='50%'>Salário</td>
							<td>
								<PriceHighLight varian="income">
									R$ 3.000,00
								</PriceHighLight>
							</td>
							<td>Minha mão de obra</td>
							<td>01/01/2023</td>
						</tr>
						<tr>
							<td width='50%'>Veterinário</td>
							<td>
								<PriceHighLight varian="outcome">
									R$ -300,00

								</PriceHighLight>
							</td>
							<td>Paçoca</td>
							<td>01/01/2023</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	)
}
