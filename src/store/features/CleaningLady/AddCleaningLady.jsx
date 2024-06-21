// const day =state.allDays.days.find(d=>d.cleaningLadyId==action.payload.ladyId 
//     &&displayDate(d.date)==displayDate(action.payload.date))
const AddCleaningLady = () =>{

    return(<>
    
    <div className='SignUp'>
            <form className='SignUpform' onSubmit={handleSubmit(handleSave)}>
                <div className='header'>
                    <u><h2>SignUp</h2></u>
                    <span>Sing in to continue.</span>
                </div>
                <TextField id="username" label={`UserName ${errors.username?.type == "required" ? '*' : ''}`} variant="standard"
                    {...register("username", { pattern: /^[ A-Za-z]+$/i, required:true, maxLength: 15 })}
                    InputProps={{
                        endAdornment: (
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.username?.type === 'pattern' && <Alert severity="warning">please enter only english letters.</Alert>}
                {errors.username?.type === 'maxLength' && <Alert severity="warning">please enter a valid user name that is at least 25 letters.</Alert>}
                <br />

                <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    {...register("name", { pattern: /^[ A-Za-z]+$/i, maxLength: 25 })}
                    InputProps={{
                        endAdornment: (
                            <Person4Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.name?.type === 'pattern' && <Alert severity="warning">please enter only english letters.</Alert>}
                {errors.name?.type === 'maxLength' && <Alert severity="warning">please enter a valid user name that is at least 25 letters.</Alert>}

                <br />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password {errors.password?.type == "required" ? '*' : ''}</InputLabel>
                    <Input id="password" type={showPassword ? 'text' : 'password'}
                        {...register("password", { minLength: 4, maxLength: 8, required: true })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {errors.password?.type === 'minLength' && <Alert severity="error">Please enter a valid password that is at more 3 characters.</Alert>}
                    {errors.password?.type === 'maxLength' && <Alert severity="warning">please enter a valid user name that is at least 9 characters.</Alert>}

                </FormControl>

                <br />
                <TextField
                    id="phone"
                    label="Phone"
                    variant="standard"
                    {...register("phone", { pattern: /^[0-9]+$/i, minLength: 10, maxLength: 10 })}
                    InputProps={{
                        endAdornment: (
                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.phone?.type === 'pattern' && <Alert severity="error">Please enter only numbers.</Alert>}
                {errors.phone?.type === 'minLength' && <Alert severity="error">Please enter a valid password that is at more 3 numbers.</Alert>}
                {errors.phone?.type === 'maxLength' && <Alert severity="warning">Please enter a valid user name that is at least 9 numbers.</Alert>}
                <br />

                <TextField
                    id="city"
                    label="City"
                    variant="standard"
                    {...register("city", { pattern: /^[ A-Za-z]+$/i, maxLength: 15 })}
                    InputProps={{
                        endAdornment: (
                            <LocationCityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.city?.type === 'pattern' && <Alert severity="warning">please enter only english letters.</Alert>}
                {errors.city?.type === 'maxLength' && <Alert severity="warning">Please enter a valid user name that is at least 15 numbers.</Alert>}
                <br />

                <TextField
                    id="address"
                    label="Address"
                    variant="standard"
                    {...register("address", { pattern: /^[ A-Za-z]+$/i, maxLength: 15 })}
                    InputProps={{
                        endAdornment: (
                            <HomeWorkOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.address?.type === 'pattern' && <Alert severity="warning">please enter only english letters.</Alert>}
                {errors.address?.type === 'maxLength' && <Alert severity="warning">Please enter a valid user name that is at least 15 numbers.</Alert>}
                <br />
                <TextField
                    id="housenumber"
                    label="HouseNumber"
                    variant="standard"
                    {...register("housenumber", { pattern: /^[0-9]+$/i, minLength: 1, maxLength: 3 })}
                    InputProps={{
                        endAdornment: (
                            <HouseOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.housenumber?.type === 'pattern' && <Alert severity="error">Please enter only numbers.</Alert>}
                {errors.housenumber?.type === 'minLength' && <Alert severity="warning">Please enter a valid password that is at more 0 numbers.</Alert>}
                {errors.housenumber?.type === 'maxLength' && <Alert severity="warning">Please enter a valid user name that is at least 3 numbers.</Alert>}
                <br />
                <div className='btnSubmit'>
                    <BootstrapButton variant="contained" disabled={!isValid} type='Submit'>Log in</BootstrapButton>
                </div>
            </form>
        </div>
    </>)
}

export default AddCleaningLady 