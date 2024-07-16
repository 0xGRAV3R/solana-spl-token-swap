use anchor_lang::prelude::*;

declare_id!("26q3bheoozNxEwLLQJcXybiPuCk3nrZz8ENrSQXNfAJL");

#[program]
pub mod token_swap {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
